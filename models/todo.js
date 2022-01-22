const mongoose = require('mongoose');
const connection = require('../db/database');


const itemsSchema = {
    name: String
}



const Item = mongoose.model('Item', itemsSchema);


module.exports = Item;






