import { useState } from "react";
import IconSaveList from "../../asset/buttonList.png";
// import "./buttonAddMyList.css";
// import {MyListBookContext} from "../../context/myListBookContex"
// import {useNavigate} from "react-router-dom"

import { API } from "../../config/api";

function ButtonAddMyList(props) {
  // console.log(dataBook[0])
  // const navigate = useNavigate()

  const id = {
    idBook: props.idBook,
  };
  console.log(id);

  // const [book, setBook] = useState({
  //   idBook: props.idBook,
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
      const response = await API.post("/mylistbook", body, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="buttonAddMyList">
      <button onClick={handleButton}>
        Add Mylist Book <img src={IconSaveList} alt="" />{" "}
      </button>
    </div>
  );
}

export default ButtonAddMyList;
