import { Item } from '../models/item.js'

function create(req, res) {
  Item.create(req.body)
    .then(item => {
      res.json(item)
    })
}

function index(req, res) {
  Item.find({})
  .then(items => {
    res.json(items)
  })
}

function deleteItem(req,res) {
  Item.findByIdAndDelete(req.params.id)
  .then(item => {
    res.json(item)
  })
}

export {
  create,
  index,
  deleteItem as delete
}