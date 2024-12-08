import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
  
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equipment-store-server.vercel.app/equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // const remainingUser = users.filter((user) => id !== user._id);
              // setUsers(remainingUser);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className=" bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} className="rounded-xl w-[300px] h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{customization}</p>
          <div className="card-actions">
            <Link to={`/update/${card._id}`} className="btn btn-primary">
              Update
            </Link>

            <button
              onClick={() => handleUserDelete(card._id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
