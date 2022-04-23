import Image from 'next/image';

function MediaEntry(props) {
    return (
        <div
            className="flex flex-col min-w-[192px] min-h-[108px] w-[10vw] h-[10vh] mr-4 relative cursor-pointer transition ease-in-out duration-500 transform hover:scale-110 hover:z-50"
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
                <p
                    className='py-4 sm:text-xs md:text-md absolute bottom-[8px] left-[8px]'
                >
                    {props.data.title}
                </p>
                <p
                    className='sm:text-xs md:text-md absolute bottom-[8px] left-[8px]'
                >
                    {props.data.director}
                </p>
            </div>
        </div>
    )
}

export default MediaEntry;
