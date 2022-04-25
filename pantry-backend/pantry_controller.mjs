import * as pantryItems from './pantry_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

/**
 * Create a new pantry item with the name, quantity, category, and date added
 */
app.post('/pantry', (req, res) => {
    pantryItems.createItem(req.body.name, req.body.quantity, req.body.category, req.body.date)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

/**
 * Retrieve all exercises
 */
app.get('/pantry', (req, res) => {
    let filter = {};
    pantryItems.findItem(filter)
        .then(pantryItem => {
            res.send(pantryItem);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

/**
 * Update the pantry item whose id is provided in the path parameter and set
 * its name, quantity, category, and date to the values provided in the body.
 */
app.put('/pantry/:_id', (req, res) => {
    pantryItems.replaceItem(req.params._id, req.body.name, req.body.quantity, req.body.category, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, quantity: req.body.quantity, category: req.body.category, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/pantry/:_id', (req, res) => {
    pantryItems.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

// /**
//  * Retrive the item corresponding to the ID provided in the URL.
//  */
// app.get('/pantry/:_id', (req, res) => {
//     const itemId = req.params._id;
//     item.findItemById(itemId)
//         .then(item => {
//             if (item !== null) {
//                 res.json(item); // express sets the status code to 200 by default
//             } else {
//                 res.status(404).json({ Error: 'Resource not found' });
//             }
//         })
//         .catch(error => {
//             res.status(400).json({ Error: 'Request failed' });
//         });
// });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});