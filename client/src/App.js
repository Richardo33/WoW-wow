import Landing from "./pages/landing";
import AfterLogin from "./pages/afterLogin";
import Subscribe from "./pages/subscribe";
import ProfilePages from "./pages/profilePage";
import BookDetail from "./pages/bookDetail";
import AddBook from "./pages/addBook";
import Transactions from "./pages/transactionPages";

import PrivateRoute from "./component/privateRoute";

//import bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

//import necessary object from react-router-dom

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<AfterLogin />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="bookDetail" element={<BookDetail />} />
        <Route exact path="/addBook" element={<AddBook />} />
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/profilePages" element={<ProfilePages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
