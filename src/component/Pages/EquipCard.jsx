import Swal from 'sweetalert2';
import discountIcon from '../../assets/discount.png'

const EquipCard = ({equip}) => {
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
      const handleBuyProduct = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "If you want to buy product click YES ",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Buy!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Purchased!",
                text: "This product is Your now",
                icon: "success"
              });
            }
          });
      }
    return (
        <div className="bg-[#ffffff]">
            <div>
                <div className='relative'>
                    <img className="px-10 py-4 " src={photo} alt="" />
                    <img className='w-24 absolute top-5' src={discountIcon} alt="" />
                </div>
                <hr />
               <div className="px-4">
               <h2 className="text-xl font-semibold my-3">{name}</h2>
                <p>{customization}</p>
                <div className='flex justify-between items-center py-2'>
                <p className="text-xl font-semibold my-3 text-green-600">${price}</p>
                <button onClick={handleBuyProduct} className='font-bold bg-green-600 px-3 py-2 text-[#ffffff]'>Buy Now</button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default EquipCard;