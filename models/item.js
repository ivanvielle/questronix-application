const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Item name is required']
	},

	qty: {
		type: Number,
		required: [true, 'Item quantity is required']
	},

	amount: {
		type: Number,
		required: [true, 'Item amount']
	}
})

module.exports = mongoose.model('Item', itemSchema)