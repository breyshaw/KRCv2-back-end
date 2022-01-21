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

export {
  create,
  index
}