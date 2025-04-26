import Swal from "sweetalert2";
import discountIcon from "../../assets/icons/discount.png";

const EquipCard = ({ equip }) => {
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
  } = equip;

  // const handleBuyProduct = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "If you want to buy product click YES ",
  //     icon: "question",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Buy!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const newCart = {
  //         name,
  //         rating,
  //         price,
  //         customization,
  //         category,
  //         details,
  //         photo,
  //         quantity,
  //       };
  //       fetch("https://equipment-store-server.vercel.app/cart", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(newCart),
  //       })
  //         .then((res) =>res.json())
  //         .then((data) =>{
  //           console.log(data);
  //           if (data.insertedId) {
  //             Swal.fire({
  //               title: "Purchased!",
  //               text: "This product is Your now",
  //               icon: "success",
  //             });
  //           }
  //         });
  //     }
  //   });
  // };

  const handleBuyProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you want to buy this product, click YES.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Buy!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = {
          name,
          rating,
          price,
          customization,
          category,
          photo,
          quantity,
        };

        fetch("https://equipment-store-server.vercel.app/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCart),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Added!",
                text: "Product Added to the cart!",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Something went wrong. Please try again.",
                icon: "error",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error",
              text: "Failed to complete the purchase. Please check your connection.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="bg-[#ffffff]">
      <div>
        <div className="relative">
          <img className="px-5 w-full h-[180px] py-4 " src={photo} alt="" />
          <img
            className="w-20 absolute -top-4 -ml-6"
            src={discountIcon}
            alt=""
          />
        </div>
        <hr />
        <div className="bg-white p-4 flex flex-col min-h-[170px]">
          <h2 className="text-xl font-semibold my-3">{name}</h2>
          <p>{customization}</p>
          <div className="mt-auto flex justify-between items-center ">
            <p className="text-xl font-semibold text-green-600">${price}</p>
            <button
              onClick={handleBuyProduct}
              className="font-bold bg-[#5C4E4E] px-3 py-2 text-white flex-shrink-0"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipCard;
