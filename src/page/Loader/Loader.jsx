import Lottie from 'lottie-react';
import loading from '../../assets/Lotty/loding.json'
const Loader = () => {
    return (
        <div className='min-h-screen container mx-auto flex flex-col justify-center items-center'>
            <Lottie className='w-60' animationData={loading}></Lottie>
        </div>
    );
};

export default Loader;