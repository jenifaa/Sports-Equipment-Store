import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/error2.avif'

const Error = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-center items-center'>
            <img className='w-10/12 mx-auto h-[500px] my-20 md:h-[700px]' src={errorImg} alt="" />
            </div>
           <div className='flex justify-center items-center'><Link className='px-4 py-2 bg-[#5c4e4e] my-5 text-white' to='/'>Go Home</Link></div>
        </div>
    );
};

export default Error;