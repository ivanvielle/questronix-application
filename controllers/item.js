const Item = require('../models/item')

//view all active items
module.exports.getAllItem = () => {
	return Item.find(
		{
			isActive: true
		}
	)
	.then(resultFromFindAll => resultFromFindAll)
}

//get specific item
module.exports.getItem = (params) => {
	return Item.findById(params.itemId).then(resultFromFindById => resultFromFindById)
}

//create new item
module.exports.createItem = (params) => {
	let newItem = new Item({
		name: params.name,
		qty: params.qty,
		amount: params.amount
	})

	return newItem.save().then((item, err) => {
		return (err) ? false : true
	})
}

//update an item
module.exports.updateItem = (params) => {
	let updatedItem = {
		name: params.name,
		qty: params.qty,
		amount: params.amount
	}

	return Item.findByIdAndUpdate(params.itemId, updatedItem)
	.then((item, err) => {
		return (err) ? false : true
	})
}

//archive an item
module.exports.archiveItem = (params) => {
	let updateActive = {
		isActive: false
	}

	return Item.findByIdAndUpdate(params.itemId, updateActive)
	.then((item, err) => {
		return (err) ? false : true
	})
}