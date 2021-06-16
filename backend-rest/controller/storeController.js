const { Store } = require('../models')

exports.getAllStore = async (req, res, next) => {
  try {
    const stores = await Store.findAll()

    res.status(200).json({ stores })

  } catch (err) {
    next (err)
  }
}

exports.getStore = async (req, res, next) => {
  try {
    const { id } = req.params

    const store = await Store.findOne({
      where: {
        id
      }
    })

    res.status(200).json({ store })

  } catch (err) {
    next (err)
  }
}

exports.createStore = async (req, res, next) => {
  try {
    const { name, desrciption } = req.body
    const store = await Store.create({
      name,
      desrciption
    })

    res.status(201).json({ store })

  } catch (err) {
    next(err)
  }
}

exports.updateStore = async (req, res, next) => {
  try {
    const { name, desrciption, rating } = req.body

    await Store.update({
      name,
      desrciption,
      rating
    })

    res.status(200).json({ message: 'update store data complete' })

  } catch (err) {
    next(err)
  }
}

exports.deleteStore = async (req, res, next) => {
  try {
    const { id } = req.params
    const store = await Store.findOne({ where: id })

    await store.destroy();

    res.status(204).json();

  } catch (err) {
    next(err)
  }
}