import express from 'express'
import { 
  getUsers, 
  createUser, 
  loginUser, 
  authenticateUser, 
  sendMessage 
} from '../controllers/userController'

const router = express.Router();

router.get("/users", getUsers); // gets all users
router.post("/signup", createUser); // new user creates account
router.post("/signin", loginUser); // login to exisiting account
router.get("/response", authenticateUser);
router.get("/response", sendMessage);

module.exports = router;