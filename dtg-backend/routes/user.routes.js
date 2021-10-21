const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.user.index)
router.post('/', ctrls.user.create)
router.put('/:id', ctrls.user.update)
router.delete('/:id', ctrls.user.destroy)

module.exports = router