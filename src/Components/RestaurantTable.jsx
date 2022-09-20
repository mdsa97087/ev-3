import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data=[]}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele)=><RestaurantCard key = {ele.id} {...ele} />)}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
