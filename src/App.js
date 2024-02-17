import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Topbar from "./components/Topbar";
import User from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import ViewUser from "./components/ViewUser";
import EditUser from "./components/EditUser";
import { ToastContainer } from "react-toastify";


function App() {

  return(
   <BrowserRouter>
    <div id="wrapper">
      
  
  <div id="content-wrapper" className="d-flex flex-column">
   
    <div id="content">
        <Topbar />
        <div className="container-fluid p-sm-0 m-sm-0 px-md-5">
          <Routes>
            {/* <Route path="/" element={<Dashboard />}></Route> */}
            <Route path="/" element={<User />}></Route>
            <Route path="/createuser" element={<CreateUser />}></Route>
            <Route path="/create-user" element={<CreateUser />}></Route>
            <Route path="/view-user/:id" element={<ViewUser />}></Route>
            <Route path="/edit-user/:id" element={<EditUser />}></Route>

          </Routes>
          <ToastContainer autoClose={1000} />
        </div>
        </div>
        </div>
        </div>
   </BrowserRouter>
  )
}

export default App;