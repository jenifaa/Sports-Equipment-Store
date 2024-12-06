import errorImg from '../../assets/error.avif'

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-center items-center'>
            <img src={errorImg} alt="" />
            </div>
            <h2 className='text-center font-bold md:text-5xl text-red-800'>Page Not Found...</h2>
        </div>
    );
};

export default Error;