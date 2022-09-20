import { Link } from "react-router-dom";

export default function RestaurantCard({id,rating, name,type,price_starts_from}) {
 

  return (
    <tr data-testid="item">
      <td>
        <Link to= {`/restaurants/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
