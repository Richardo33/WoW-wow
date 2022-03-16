const express = require("express");

const router = express.Router();

const { uploadFile } = require("../middleware/uploadFile");

const { auth } = require("../middleware/auth");

// const { auth } = require("../middleware/auth");

const {
  getUsers,
  getUserId,
  updateUser,
  deleteUser,
} = require("../controlers/user");

const {
  addBook,
  getBook,
  getBookId,
  editBook,
  deleteBook,
} = require("../controlers/books");

const {
  addTransaction,
  getTransaction,
  getTransactionId,
} = require("../controlers/transaction");

const { register, login } = require("../controlers/auth");

router.get("/users", getUsers);
router.get("/user/:id", getUserId);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.post("/addbook", auth, uploadFile("bookFile", "imgCover"), addBook);
router.get("/showbooks", getBook);
router.get("/book/:id", getBookId);
router.patch(
  "/updatebook/:id",
  auth,
  uploadFile("bookFile", "imgCover"),
  editBook
);
router.delete("/book/:id", deleteBook);

router.post("/transaction", addTransaction);
router.get("/transactions", getTransaction);
router.get("/transaction/:id", getTransactionId);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
