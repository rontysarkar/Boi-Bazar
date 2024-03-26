import ErrorImg from '../assets/images/notfound.png'
const Error = () => {
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <img className='w-[500px] ' src={ErrorImg} alt="" />
        </div>
    );
};

export default Error;