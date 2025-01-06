import errorImg from '../../assets/images/error2.avif'

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-center items-center'>
            <img className='w-10/12 mx-auto h-[500px] my-20 md:h-[700px]' src={errorImg} alt="" />
            </div>
            {/* <h2 className='text-center font-bold md:text-5xl text-red-800'>Page Not Found...</h2> */}
        </div>
    );
};

export default Error;