import { Item } from '../models/item.js'

function create(req, res) {
  Item.create(req.body)
    .then(item => {
      res.json(item)
    })
}

export {
  create
}