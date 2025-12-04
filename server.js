const express = require('express');
const mongoose = require('mongoose');
const Sub = require('./models/subModel');  // Sub model
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Test route
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><h2>Sub Ordering API</h2>');
});

// Return all subs/orders
app.get('/subs', async(req, res) => {
    try {
        const subs = await Sub.find({});
        res.status(200).json(subs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Return a sub by id
app.get('/subs/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const sub = await Sub.findById(id);
        res.status(200).json(sub);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Create a sub/order
app.post('/subs', async(req, res) => {
    try {
        const sub = await Sub.create(req.body);
        res.status(200).json(sub);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// Update a sub by id
app.put('/subs/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const sub = await Sub.findByIdAndUpdate(id, req.body);
        if(!sub){
            return res.status(404).json({message: `Cannot find any sub with ID ${id}`});
        }
        const updatedSub = await Sub.findById(id);
        res.status(200).json(updatedSub);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete a sub by id
app.delete('/subs/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const sub = await Sub.findByIdAndDelete(id);
        if(!sub){
            return res.status(404).json({message: `Cannot find any sub with ID ${id}`});
        }
        res.status(200).json(sub);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Connect to MongoDB Atlas
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://0303725m_db_user:2GF9RTw8jggr3l2w@suborders.4q9bn6r.mongodb.net/subsDB')
.then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(3000, () => {
        console.log('Sub API app is running on port 3000');
    });
}).catch((error) => {
    console.log(error);
});

app.delete('/subs/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const sub = await Sub.findByIdAndDelete(id);
        if(!sub) return res.status(404).json({message: `Cannot find sub with ID ${id}`});
        res.status(200).json(sub);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
