import React, { useEffect, useState, setState } from 'react'
import axios from 'axios';
import MediaEntry from '../mediaEntry';
import constants from '../../utils/constants';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function List(props) {

    const [media, setMedia] = useState(0);
    const [update, setUpdate] = useState(false);

    async function getMedia() {
        try {
            const requestURL = constants.BASE_URL + props.endpoint;
            const request = await axios.get(requestURL);
            const data = request.data.results;
            setMedia(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getMedia();
    }, [update]);

  return (
    <div className='relative'>
        <div className='flex flex-row group'>
            <h1 className='text-2xl mb-4 mr-4 h-fit'>{props.title}</h1>
            <ChevronRightIcon textSize='small' className='text-transparent transition ease-in-out duration-300 group-hover:text-blue-300'/>
        </div>
        <div className='flex flex-col content-center pt-4 px-4 overflow-x-scroll no-scrollbar h-[10rem]'>
            <div className='flex-col'>
                {media != undefined ? (
                    <div className='flex flex-row'>
                        {
                            Object.entries(media).map(([key, data]) => (
                                <div key={key}>
                                    <MediaEntry 
                                        title={data.title} 
                                        image={data.backdrop_path != null ? `${constants.IMAGE_URL}${data.backdrop_path}` : `${constants.IMAGE_URL}${data.poster_path}`}
                                        id={data.id}
                                        router={props.router}
                                    />
                                </div>
                            ))
                        }
                    </div>
                ) : 
                (
                    <></>
                )
                }
            </div>
        </div>
        <div className='absolute top-[2rem] right-0 bg-gradient-to-l from-[#141414] h-[10rem] w-[8rem]' />
    </div>
  )
}