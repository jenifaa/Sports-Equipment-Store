import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    name,
    rating,

    price,
    customization,
    category,
    details,
    photo,
    quantity,
    time,
  } = card;
  return (
    <div>
      <div className=" bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
          
            className="rounded-xl w-[300px] h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{customization}</p>
          <div className="card-actions">
            <Link to={`/update/${card._id}`} className="btn btn-primary">Update</Link>
            <Link className="btn btn-primary">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
