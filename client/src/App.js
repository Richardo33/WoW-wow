import Landing from "./pages/landing";
import AfterLogin from "./pages/afterLogin";
import Subscribe from "./pages/subscribe";
import ProfilePages from "./pages/profilePage";
import BookDetail from "./pages/bookDetail";
import AddBook from "./pages/addBook";
import Transactions from "./pages/transactionPages";
import ReadBook from "./pages/readBook";
import { useNavigate } from "react-router-dom";
// import PrivateRoute from "./component/privateRoute";
import { useContext, useEffect } from "react";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import necessary object from react-router-dom

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./component/hook/userContext";
// import { useContext } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  const [state, dispacth] = useContext(UserContext);
  // console.log(state);
  useEffect(() => {
    // if (!state.isLogin) {
    //   navigate("/");
    // }
    // if (!localStorage.token) {
    //   navigate("/");
    // }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/checkAuth");
      // console.log(response);
      if (response.status === 404) {
        return dispacth({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<AfterLogin />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="/bookDetail/:id" element={<BookDetail />} />
        <Route exact path="/readBook/:id" element={<ReadBook />} />
        <Route exact path="/addBook-admin" element={<AddBook />} />
        <Route exact path="/transactions-admin" element={<Transactions />} />
        <Route exact path="/profilePages" element={<ProfilePages />} />
        {/* <Route exact path="/" element={<PrivateRoute />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
