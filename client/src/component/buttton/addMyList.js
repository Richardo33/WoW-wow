import { useState } from "react";
import IconSaveList from "../../asset/buttonList.png";
// import "./buttonAddMyList.css";
// import {MyListBookContext} from "../../context/myListBookContex"
import { useNavigate } from "react-router-dom";

import { API } from "../../config/api";

function ButtonAddMyList(props) {
  const navigate = useNavigate();

  const id = {
    idBooks: props.idBook,
  };
  // console.log(id);

  // const [book, setBook] = useState({
  //   idBook: props.idBooks,
  // });

  const handleButton = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(id);
      const response = await API.post("/addMyList", body, config);
      // console.log(response);

      // navigate("/profilePages");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="buttonAddMyList">
      <button
        onClick={handleButton}
        style={{
          background: "red",
          marginRight: "20px",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "50px",
          border: "none",
          color: "white",
        }}
      >
        Add Mylist Book <img src={IconSaveList} alt="" />{" "}
      </button>
    </div>
  );
}

export default ButtonAddMyList;
