const res = require("express/lib/response");
const { transaction, user } = require("../../models");

exports.addTransaction = async (req, res) => {
  try {
    const dataBody = req.body;
    const addTrans = await transaction.create({
      transactionProof: dataBody.transactionProof,
      remainingActive: 26,
      userStatus: "Active",
      paymentStatus: "pending",
      idUser: dataBody.idUser,
    });

    const dataTransaction = await user.findOne({
      where: {
        id: addTrans.idUser,
      },
      attributes: {
        exclude: ["email", "password", "isSubs", "createdAt", "updatedAt"],
      },
      include: {
        model: transaction,
        as: "transaction",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });

    res.send({
      message: "Add Transaction done",
      user: { transaction: dataTransaction },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "cannot add transaction",
    });
  }
};

exports.getTransaction = async (req, res) => {
  try {
    const data = await transaction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["email", "password", "isSubs", "createdAt", "updatedAt"],
        },
      },
    });

    res.send({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "cannot show all the transaction",
    });
  }
};

exports.getTransactionId = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await transaction.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: user,
        as: "user",
        attributes: {
          exclude: ["email", "password", "isSubs", "createdAt", "updatedAt"],
        },
      },
    });
    res.send({
      data: { transaction: data },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "cannot get the data",
    });
  }
};
