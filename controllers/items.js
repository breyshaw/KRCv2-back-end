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

function update(req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(item => {
      res.json(item)
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
  update,
  deleteItem as delete
}