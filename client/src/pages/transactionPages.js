// import React from "react";
import Navigasi from "../component/nav";
import { Table, Dropdown } from "react-bootstrap";
import "./syling/transactionPages.css";

import { API } from "../config/api";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
// import { get } from "../../../server/src/routes";

function Transactions() {
  const [transaction, setTransaction] = useState([]);
  const [detTrans, setDetTrans] = useState({
    userStatus: "active",
    remainingActive: 30,
    paymentStatus: "approve",
  });

  const [reject, setReject] = useState({
    userStatus: "",
    remainingActive: 0,
    paymentStatus: "",
  });

  const getTransaction = async () => {
    try {
      const response = await API.get("/transactions");
      setTransaction(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);

  const approveTransaction = async (id, idUser) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setDetTrans({
        userStatus: "Active",
        remainingActive: 30,
        paymentStatus: "approve",
      });

      const response = await API.patch(`/editTrans/${id}`, detTrans, config);

      console.log(response);
      getTransaction();

      Navigate("/transactions-admin");
    } catch (error) {
      console.log(error);
    }
  };

  const cancelTransaction = async (id, idUser) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // setReject({
      //   userStatus: "No-active",
      //   remainingActive: 30,
      //   paymentStatus: "cancel",
      // });

      const response = await API.patch(`/editTrans/${id}`, reject, config);

      console.log(response);
      getTransaction();

      Navigate("/transactions-admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="transactionScreen">
      <div>
        <Navigasi />
      </div>

      <div className="tableContent">
        <Table striped border responsive="sm">
          <thead>
            <tr className="head">
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          {transaction.map((item, index) => {
            let number = index + 1;
            return (
              <tbody>
                <tr>
                  <td>{number}</td>
                  <td>{item.user.fullName}</td>
                  <td>
                    {/* {item.transactionProof} */}
                    <a
                      href={`http://localhost:5000/uploads/${item.transactionProof}`}
                      target="_blank"
                    >
                      {item.transactionProof}
                    </a>
                  </td>
                  <td>{item.remainingActive} / hari</td>
                  <td>
                    {item.userStatus == "active" ? (
                      <p className="text-success fw-bold">Active</p>
                    ) : (
                      <p className="text-danger fw-bold">No-active</p>
                    )}
                  </td>
                  <td>
                    {item.paymentStatus == "approve" ? (
                      <p className="text-success fw-bold">Approve</p>
                    ) : (
                      <p className="text-danger fw-bold">Cancel</p>
                    )}
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        <div className="triangle"></div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            approveTransaction(item.id);
                          }}
                          className="text-success fw-bold"
                        >
                          Approved
                        </Dropdown.Item>
                        <hr />
                        <Dropdown.Item
                          onClick={() => {
                            cancelTransaction(item.id);
                          }}
                          className="text-danger fw-bold"
                        >
                          Cancel
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default Transactions;
