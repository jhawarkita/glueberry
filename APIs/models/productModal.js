const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	Image: String,
	Title: String,
	Price: Number,
	Category: String,
	Favorite: Boolean,
	Featured: Boolean,
});

module.exports = mongoose.model("Product", productSchema)