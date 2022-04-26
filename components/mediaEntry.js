import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

import { handleEntryClick } from '../utils/mediaEntryHandler';

function MediaEntry(props) {
    
    return (
        <div
            className='group flex flex-col min-w-[192px] min-h-[108px] w-[10vw] h-[10vh] mr-4 relative transition ease-in-out delay-100 duration-200 transform hover:scale-110 hover:z-50 select-none'
        >
            <Image
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                className='rounded-md'
                src={props.image}
                alt={props.title}
            />
            <div className='flex flex-col'>
                <p
                    className='py-4 sm:text-sm md:text-md absolute bottom-[0px] ease-in-out duration-500 group-hover:-translate-y-3 left-[8px]'
                >
                    {props.title}
                </p>
                <div className='flex min-w-[90%] sm:text-xs md:text-md absolute bottom-[8px] left-[8px] content-center text-transparent translate-y-2 ease-out duration-500 delay-100 group-hover:text-gray-300 group-hover:-translate-y-0'>
                    <InfoIcon fontSize='small' onClick={() => handleEntryClick(props.router, props.id)} className='grow-0 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default MediaEntry;
