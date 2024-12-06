

const Famouse = ({Famouse}) => {
    const   {
        name,
        rating,
        price,
        customization,
        category,
        details,
        photo,
        quantity,
        time,
      } = Famouse
    return (
        <div>
            <div className="border p-6 rounded-xl">
            <div>
                <img className="w-full h-72 rounded-xl" src={photo} alt="" />
            </div>
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{rating}</div>
            </h2>
            <p>{customization}</p>
            <div className="">
              <div className="">{quantity}</div>
              <div className="">{price}</div>
            </div>
        </div>
        </div>
    );
};

export default Famouse;