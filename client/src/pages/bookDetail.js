import React, { useEffect, useState } from "react";
import Account from "../component/account";
import "./syling/bookDetail.css";
// import Book from "../asset/big.png";
import AddListIcon from "../asset/buttonList.png";
import ReadBook from "../asset/V.png";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import ButtonAddMyList from "../component/buttton/addMyList";

function BookDetail() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    publicationsDate: "",
    pages: "",
    author: "",
    isbn: "",
    about: "",
    bookFile: "",
    imgCover: "",
  });

  // const [myBook, setMyBook] = useState({});

  const { id } = useParams();

  const getBook = async () => {
    try {
      const response = await API.get(`/book/${id}`);
      // console.log(response.data.data.book);
      setBook(response.data.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="bookDetailScreen">
      <div className="position-relative leftSide">
        <div className="position-fixed">
          <Account />
        </div>
      </div>
      <div className="rightSide">
        <div className="topPart">
          <div className="leftTop">
            <div>
              <img
                src={`http://localhost:5000/uploads/${book.imgCover}`}
                alt=""
              />
            </div>
          </div>
          <div className="rightTop">
            <div className="title">
              <h1>{book.title}</h1>
              <p>{book.author}</p>
            </div>
            <div className="detail">
              <h6>Publication date</h6>
              <p>{book.publicationsDate}</p>
            </div>
            <div className="detail">
              <h6>Pages</h6>
              <p>{book.pages}</p>
            </div>
            <div className="detail">
              <h6 style={{ color: "red" }}>ISBN</h6>
              <p>{book.isbn}</p>
            </div>
          </div>
        </div>
        <div className="bottomPart">
          <div className="botDetail">
            <h1>About This Book</h1>
            <div className="text">
              <p>{book.about}</p>
            </div>
            <div className="button ">
              <div className="addList">
                <ButtonAddMyList idBook={id} />
              </div>
              <button
                className="readBook"
                onClick={() => {
                  navigate(`/readBook/${book.id}`);
                }}
              >
                Read Book <img src={ReadBook} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetail;
