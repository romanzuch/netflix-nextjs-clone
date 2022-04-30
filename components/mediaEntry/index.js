import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';

import { handleEntryClick } from '../../utils/mediaEntryHandler';

function MediaEntry(props) {
    
    return (
        <div
            className='min-w-[192px] min-h-[108px] w-[10vw] h-[10vh] mr-4 transition ease-in-out delay-100 duration-200 transform hover:scale-110 cursor-pointer'
            onClick={() => handleEntryClick(props.router, props.id)}
        >
            <Image
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                className='rounded-md'
                width={192}
                height={108}
                src={props.image}
                alt={props.title}
            />
        </div>
    )
}

export default MediaEntry;
