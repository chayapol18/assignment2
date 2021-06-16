const express = require('express')
const router = express.Router()
const storeController = require('../controller/storeController')

router.get('/',
storeController.getAllStore
)

router.get('/:id',
storeController.getStore
)

router.post('/',
storeController.createStore
)

router.put('/',
storeController.updateStore
)

router.delete('/:id',
storeController.deleteStore
)

module.exports = router