import Swal from 'sweetalert2';
import icon from '../../assets/icons/30-percent.png'

const Famous = ({famous}) => {
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
      } = famous;
    const handleBuy = () => {
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
                    text: "This product Added to the cart!",
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
                <div className='relative'>
                    <img className="px-5 w-full h-[200px] py-4 " src={photo} alt="" />
                    <img className='w-24 absolute -top-7 -ml-10' src={icon} alt="" />
                </div>
                <hr />
               <div className="px-4">
               <h2 className="text-xl font-semibold my-3">{name}</h2>
                <p>{customization}</p>
                <div className='flex justify-between items-center py-2'>
                <p className="text-xl font-semibold  text-green-600">${price}</p>
                <button onClick={handleBuy} className='font-bold bg-[#5C4E4E] px-3 py-2 text-[#ffffff]'>Buy Now</button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Famous;