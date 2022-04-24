import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import FiberNewIcon from '@mui/icons-material/FiberNew';

function MediaEntry(props) {
    return (
        <div
            className="group flex flex-col min-w-[192px] min-h-[108px] w-[10vw] h-[10vh] mr-4 relative cursor-pointer transition ease-in-out duration-500 transform hover:scale-110 hover:z-50"
        >
            <Image
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                className='rounded-md'
                src={props.data.imdbWallpaper}
                height={1080}
                width={1920}
                alt={props.data.title}
            />
            <div className='flex flex-col'>
                { props.data.new === true ? <FiberNewIcon className='z-0 absolute -top-2 -left-2' fontSize='medium' htmlColor='#E50914' /> : <></> }
                <p
                    className='py-4 sm:text-xs md:text-md absolute bottom-[0px] transition duration-1000 group-hover:bottom-[8px] left-[8px]'
                >
                    {props.data.title}
                </p>
                <div className='flex min-w-[90%] sm:text-xs md:text-md absolute bottom-[8px] left-[8px] content-center invisible group-hover:visible transition ease-in-out duration-2000'>
                    <p className='grow'>{props.data.director}</p>
                    <InfoIcon fontSize='small' className='grow-0' />
                </div>
            </div>
        </div>
    )
}

export default MediaEntry;
