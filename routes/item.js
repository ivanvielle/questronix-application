const express = require('express')
const router = express.Router()
const ItemController = require('../controllers/item')

//get all active items
router.get('/inventory', (req, res) => {
	ItemController.getAllItem().then(resultFromFindAll => res.send(resultFromFindAll))
})

//get a specific item
router.get('/:itemId', (req, res) => {
	let itemId = req.params.itemId
	ItemController.getItem({itemId}).then(resultFromFindById => res.send(resultFromFindById))
})

//create new item
router.post('/create', (req, res) => {
	ItemController.createItem(req.body).then(resultFromCreateItem => res.send(resultFromCreateItem))
})

//update an item
router.put('/update', (req, res) => {
	ItemController.updateItem(req.body).then(resultFromUpdateItem => res.send(resultFromUpdateItem))
})

//archive an item
router.delete('/delete/:itemId', (req, res) => {
	let itemId = req.params.itemId
	ItemController.archiveItem({itemId}).then(resultFromArchive => res.send(resultFromArchive))
})

module.exports = router