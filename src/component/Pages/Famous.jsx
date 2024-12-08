import icon from '../../assets/30-percent.png'

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
    return (
        <div className="bg-[#ffffff]">
            <div>
                <div className='relative'>
                    <img className="px-10 py-4 " src={photo} alt="" />
                    <img className='w-20 absolute top-7' src={icon} alt="" />
                </div>
                <hr />
               <div className="px-4">
               <h2 className="text-xl font-semibold my-3">{name}</h2>
                <p>{customization}</p>
                <div className='flex justify-between items-center py-2'>
                <p className="text-xl font-semibold my-3 text-green-600">${price}</p>
                <button className='font-bold bg-green-600 px-3 py-2 text-[#ffffff]'>Buy Now</button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Famous;