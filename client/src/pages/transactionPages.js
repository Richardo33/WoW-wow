// import React from "react";
import Navigasi from "../component/nav";
import { Table, Dropdown } from "react-bootstrap";
import "./syling/transactionPages.css";

function Transactions() {
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
          <tbody>
            <tr>
              <td>1</td>
              <td>Alvin Rich</td>
              <td>bca.jpg</td>
              <td>26 / hari</td>
              <td>Active</td>
              <td>Approve</td>
              <td>
                <DropDownList />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jambulll</td>
              <td>bni.jpg</td>
              <td>21 / hari</td>
              <td>Active</td>
              <td>Approve</td>
              <td> <DropDownList /> </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Christian</td>
              <td>bca.jpg</td>
              <td>0 / hari</td>
              <td>Not Active</td>
              <td>Cancel</td>
              <td>
              <DropDownList />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ismail Marzuki</td>
              <td>permata.jpg</td>
              <td>0 / hari</td>
              <td>Not Active</td>
              <td>Pending</td>
              <td>
              <DropDownList />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Subagio</td>
              <td>mandiri.jpg</td>
              <td>0 / hari</td>
              <td>Not Active</td>
              <td>Pending</td>
              <td>
              <DropDownList />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Jeniffer</td>
              <td>bca.jpg</td>
              <td>0 / hari</td>
              <td>Not Active</td>
              <td>Pending</td>
              <td>
              <DropDownList />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Transactions;

function DropDownList() {
  return (
      <div>

    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <div className="triangle"></div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="text-success fw-bold">
          Approved
        </Dropdown.Item>
        <hr />
        <Dropdown.Item href="#/action-2" className="text-danger fw-bold">
          Cancel
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
  );
}
