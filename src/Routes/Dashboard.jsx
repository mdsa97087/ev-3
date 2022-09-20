import Loader from "../Components/Loader";

import {AppContext} from "../Context/AppContext"
import {useState,useEffect,useContext } from "react"
import RestaurantTable from  "../Components/RestaurantTable"
import Pagination from "../Components/Pagination"
function Dashboard() {

  const {logOut,authState} = useContext(AppContext)
  const {token} = authState
  const [option,setOption] = useState("")
  const [current,setCurrent] = useState(1)
  const [data,setData] = useState({})
  const [loading,setLoading] = useState(true)
console.log(option)
  useEffect(()=>{
    setLoading(true)
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${current}&limit=10&filter=${option}`)
    .then((res)=>res.json())
    .then((res)=>{
      
      console.log(res)
      setData(res)
      setLoading(false)
    })
  },[option,current])


  const handlePageChange = (value) =>{
    setCurrent(value)
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logOut} data-testid="logout-btn">Logout</button>
        <p>
          Token: {token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div>
        <select value={option} onChange={(e)=>{
          setCurrent(1)
          setOption(e.target.value)
          }} data-testid="filter-box">
          <option value="" >All</option>
          <option value="fine_dining" > Fine Dining</option>
          <option  value="ethnic">Ethnic</option>
          <option value="fast_food" > Fast Food</option>
          <option value="cafe" > Cafe</option>
          <option value="casual_dining" >Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
       {loading?<Loader />:<RestaurantTable data= {data.data}></RestaurantTable>} 
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div  data-testid="pagination-container">
        
        {/* Pagination */}
        <Pagination totalPages = {data?.totalPages}
           currentPage = {current}
           handlePageChange = {handlePageChange}
></Pagination>
      </div>
    </div>
  );
}

export default Dashboard;
