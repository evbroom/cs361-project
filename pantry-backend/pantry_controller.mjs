import * as pantryItems from './pantry_model.mjs';
import express from 'express';
import bodyParser from 'body-parser';

import fs from 'fs';

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
 * Retrieve all pantry items
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
 * Delete the pantry item whose id is provided in the query parameters
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

/**
 * Retrieve random pantry item
 */
app.get('/randomItem', (req, res) => {
    let filter = {};
    pantryItems.randomItem(filter)
        .then(pantryItem => {
            res.send(pantryItem);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});


/**
 * Write recipe search to text file for recipe finder microservice execution 
 */
app.use('/recipes', bodyParser.text({ type: '*/*' }), (req, res) => {
    let text = req.body;
    console.log(text)
    let data = JSON.stringify(Object.values(text)).replace("[", "").replace("\"", "").replace("]", "").replace("\"", "").toLowerCase();
    console.log(data)
    fs.writeFile('../pantry-frontend/src/recipe.txt', data, function (err) {
        if (err) {
            console.log(err)
        }
    })

})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});