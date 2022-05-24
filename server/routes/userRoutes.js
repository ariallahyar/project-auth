import express from 'express'
import { 
  getUsers, 
  createUser, 
  loginUser, 
  authenticateUser, 
  sendMessage 
} from '../controllers/userController'

const router = express.Router();

router.get("/users", getUsers);
router.post("/signup", createUser);
router.post("/signin", loginUser);
router.get("/session", authenticateUser, sendMessage);

module.exports = router;