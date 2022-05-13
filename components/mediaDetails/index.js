import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState } from 'react'
import axios from 'axios';
import constants from '../../utils/constants';
import Image from 'next/image';

export default function MediaDetails(props) {

    const [mediaDetails, setMediaDetails] = useState(0);
    const [update, setUpdate] = useState(false);

    async function getMediaDetails() {
        try {
            if (props.type === 'movie') {
                const requestURL = constants.MOVIE_DETAILS_URL + `/${props.id}` + `?api_key=${constants.API_KEY}`;
                const request = await axios.get(requestURL);
                const data = request.data;
                console.log(`${constants.IMAGE_URL}${mediaDetails.poster_path}`)
                setMediaDetails(data);
            } else {
                const requestURL = constants.TV_DETAILS_URL + `/${props.id}` + `?api_key=${constants.API_KEY}`;
                const request = await axios.get(requestURL);
                const data = request.data;
                setMediaDetails(data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getMediaDetails();
    }, [update]);

    return (
        <div className='absolute -mt-20 z-50 mx-[2.5vw] w-[95vw] h-[80vh] bg-[#232323] rounded-2xl flex flex-col overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
            <div className='imageContainer absolute left-0 w-[96vw] h-[50vh]'>
                <Image
                    layout='fill'
                    objectFit='cover'
                    src={`${constants.IMAGE_URL}${mediaDetails.backdrop_path}`}
                    alt={mediaDetails.title}
                />
            </div>
            <div className='flex flex-row justify-between relative'>
                <div className='flex items-center justify-center bg-[#232323] rounded-full h-8 w-8 cursor-pointer absolute right-0 mx-4 my-8' onClick={() => {props.router.back()}}>
                    <CloseIcon className='m-2' fontSize='medium' />
                </div>
                {
                    mediaDetails != null ? (
                        <div className='absolute m-[2vw] top-[50vh] w-[91vw] flex flex-col font-thin mt-8'>
                            <h1 className='xl:text-4xl lg:text-2xl md:text-md text-lg font-semibold'>{props.type === 'movie' ? mediaDetails.original_title : mediaDetails.name}</h1>
                            <h2 className='xl:text-xl lg:text-lg md:text-md text-sm my-2'>{mediaDetails.tagline}</h2>
                            <p className='xl:text-lg lg:text-md text-sm mb-2'>{mediaDetails.overview}</p>
                            <div className='flex flex-col md:flex-row justify-between'>
                                <div className='flex flex-row place-items-center my-4 md:my-0'>
                                    <PlayCircleIcon className='mr-4 cursor-pointer' fontSize='large'/>
                                    <AddCircleOutlineIcon className='mr-4 cursor-pointer' fontSize='large' />
                                    <ThumbUpIcon className='mr-4 cursor-pointer' fontSize='medium' />
                                </div>
                                <div className='flex flex-row xl:text-lg lg:text-md text-sm justify-between mb-8'>
                                    <div className='flex flex-col md:flex-row'>
                                        <span className='font-normal'>{props.type === 'movie' ? 'Release' : 'Initial Release'}</span>
                                        <p>{props.type === 'movie' ? mediaDetails.release_date : mediaDetails.first_air_date}</p>
                                    </div>
                                    <p className='mx-4'>·</p>
                                    <div className='flex flex-col md:flex-row'>
                                        <span className='font-normal'>{props.type === 'movie' ? 'Runtime' : 'Episodes'}</span>
                                        <p>{props.type === 'movie' ? `${mediaDetails.runtime} mins` : mediaDetails.number_of_episodes}</p>
                                    </div>
                                    <p className='mx-4'>·</p>
                                    <p>{mediaDetails.vote_average} <span><StarRateIcon className='-translate-y-0.5' fontSize='small'/></span>({mediaDetails.vote_count})</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    )
}