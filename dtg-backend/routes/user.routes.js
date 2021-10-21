const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.users.index)
router.post('/', ctrls.users.create)
router.put('/', ctrls.users.update)
router.delete('/', ctrls.users.destroy)