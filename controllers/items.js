import { Item } from '../models/item.js'

function create(req, res) {
  Item.create(req.body)
    .then(item => {
      res.json(item)
    })
}

function index(req, res) {
  Item.find({})
  .populate({
    path: 'reviews',
    populate: {
      path: 'author'
    }
  })
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

function addReview(req, res) {
  req.body.author = req.user.profile
  Item.findById(req.params.id)
  .then(item => {
    item.reviews.push(req.body)
    item.save()
    .then(savedItem => {
      savedItem
      .populate([
        {
          path: 'author'
        },
        {
          path: 'reviews',
          populate: {
            path: 'author'
          }
        }
      ])
      .then(itemToReturn => {
        res.json(itemToReturn)
      })
    })
  })
}

function clothes(req, res) {
  Item.find({ type: 'clothing' })
  .then(clothes => {
    res.json(clothes)
  })
}

export {
  create,
  index,
  update,
  deleteItem as delete,
  addReview,
  clothes
}