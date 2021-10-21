const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.gamers.index)
router.post('/', ctrls.gamers.create)
router.put('/', ctrls.gamers.update)
router.delete('/', ctrls.gamers.destroy)