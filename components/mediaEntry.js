import Image from 'next/image';

function MediaEntry(props) {
    return (
        <div
            className="w-[112px] sm:w-[112px] md:w-[15vw] mx-1 relative cursor-pointer transition ease-out duration-1000 transform hover:scale-150 hover:z-50"
        >
            <Image
                layout='responsive'
                objectFit='cover'
                objectPosition='center'
                className='rounded-md'
                src={props.data.imdbWallpaper}
                height={1080}
                width={1920}
            />
            <p
                className='text-xs sm:text-xs md:text-md absolute bottom-[1vh] left-[1vw]'
            >
                {props.data.title}
            </p>
        </div>
    )
}

export default MediaEntry;
