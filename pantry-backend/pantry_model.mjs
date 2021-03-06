// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database pantry_db in the MongoDB server running locally on port 27017
mongoose.connect(
    "mongodb://localhost:27017/pantry_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const pantrySchema = mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
}, {
    minimize: false,
    timestamps: true,
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Item = mongoose.model("Pantry", pantrySchema);

/**
 * Create an item
 * @param {String} name
 * @param {Number} quantity
 * @param {String} category
 * @param {String} date
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */

const createItem = async (name, quantity, category, date) => {
    // Call the constructor to create an instance of the model class Item
    const item = new Item({ name: name, quantity: quantity, category: category, date: date });
    // Call save to persist this object as a document in MongoDB
    return item.save();
}

/**
 * Retrive item
 * @param {Object} filter
 * @param {String} projection
 * @param {Number} limit
 * @returns
 */
const findItem = async (filter, projection, limit) => {
    const query = Item.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Find Random Item
 * @returns
 */
const randomItem = async () => {
    const query = Item.aggregate([{ $sample: { size: 1 } }])
    return query.exec();
}

/**
 * Replace the name, quantity, category, and date of the id value
provided
 * @param {String} _id
 * @param {String} name
 * @param {Number} quantity
 * @param {String} category
 * @param {String} date
 * @returns A promise. Resolves to the number of documents modified
 */
const replaceItem = async (_id, name, quantity, category, date) => {
    const result = await Item.updateOne({ _id: _id }, { name: name, quantity: quantity, category: category, date: date }, { runValidators: true });
    return result.modifiedCount;
}

/**
 * Delete the pantry item with provided id value
 * @param {String} _id
 * @returns A promise. Resolves to the count of deleted documents
 */
const deleteById = async (_id) => {
    const result = await Item.deleteOne({ _id: _id });
    // Return the count of deleted document. Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
}


export { createItem, findItem, replaceItem, deleteById, randomItem };