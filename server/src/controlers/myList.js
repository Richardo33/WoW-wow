// const { default: BookDetail } = require("../../../client/src/pages/bookDetail");
const { listBookUser, books } = require("../../models");

exports.addMyList = async (req, res) => {
  try {
    const { idBook } = req.body;
    console.log(idBook);
    const data = await listBookUser.create({
      idUser: req.user.id,
      idBooks: idBook,
    });

    // const getMyListBook = await books.findAll({
    //   where: {
    //     idUser: data.idUser,
    //   },
    //   attributes: {
    //     exclude: ["createdAt", "updatedAt"],
    //   },

    //   include: {
    //     model: books,
    //     as: "book",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //   },
    // });

    res.send({
      status: "success",
      // data: getMyListBook,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "failed",
      message: "server error",
    });
  }
};
