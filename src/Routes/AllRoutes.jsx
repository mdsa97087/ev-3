 import {Route,Routes} from "react-router-dom";
 import Home from "./Home"
 import Dashboard from "./Dashboard"
 import Login from "./Login"
 import RestaurantPage from "./RestaurantPage"
 import PrivateRoute from "../Components/PrivateRoute"


  
  function AllRoutes() {
  return <div>
    <Routes>
     
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element = {<Login></Login>}></Route>
      <Route  path="/dashboard" element={ <PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
      <Route  path="/restaurants/:id" element={<PrivateRoute><RestaurantPage></RestaurantPage></PrivateRoute>}></Route>
    </Routes>
  </div>;
}

export default AllRoutes;
