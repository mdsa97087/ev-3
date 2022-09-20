import Loader from "../Components/Loader";
import {Navigate, useParams} from "react-router-dom"
import {useState,useEffect} from "react"


function RestaurantPage() {

  const [data,setData] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams()
  console.log(id)
  useEffect(()=>{
   fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`).then((res)=>res.json())
   .then((data)=>{
    setData(data.data)
    setLoading(false)
    console.log(data)
   }).catch((err)=>{
    setLoading(false)
   })
  },[])

  if (loading) {
    return <Loader />;
  }
  return (
    <div data-testid="restaurant-container">
      
      <img data-testid="restaurant-image" width={"100%"} src={data.image} alt={data.name} />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type: 
          <b data-testid="restaurant-type">{data.type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
