const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signUp', authController.signUp);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/hi', userController.hi);

router.get('/allUsers', userController.allUsers);
router.get('/read', authController.read);
router.delete('/deleteUser/:id', userController.deleteUser);
// router.use();
router.get(
  '/me/',
  authMiddleware.isAuthenticated,
  userController.getUser
);

module.exports = router;
