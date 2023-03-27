const express = require('express')

const router = express.Router()

const userController = require('../controllers/auth')

router.route('/register').post(userController.registerController)
router.route('/login').post(userController.loginController)
router.route('/:id').patch(userController.updateInvestment)

module.exports = router;