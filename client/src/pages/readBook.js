// import Account from "../component/account";
import React, { useState, useEffect } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import { useParams } from "react-router-dom";
import { API } from "../config/api";
import Logo from "../asset/IconItalic.png";

function ReadBook() {
  const [read, setRead] = useState({});
  const { id } = useParams();
  // console.log(id);
  // console.log(read);

  const getproduct = async () => {
    try {
      const response = await API.get(`/book/${id}`);
      setRead(response.data.data.book);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);
  // const ownStyles = {
  //     ...ReactReaderStyle,
  //   arrow: {
  //     ...ReactReaderStyle.arrow,
  //     color: "rgba(205, 205, 205, 0.7)",
  //   },
  // };

  return (
    <div className="readPage">
      {/* <div className="topSide">
        <img className="" src={Logo} alt="" />
      </div> */}
      <br />
      <div
        className="bottomSide"
        style={{ height: "90vh", position: "relative" }}
      >
        <ReactReader url={`http://localhost:5000/uploads/${read.bookFile}`} />
      </div>
    </div>
  );
}

export default ReadBook;
