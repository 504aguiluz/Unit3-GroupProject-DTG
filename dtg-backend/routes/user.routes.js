const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.user.login)
router.post('/', ctrls.user.signup)
router.delete('/:id', ctrls.user.logout)

module.exports = router