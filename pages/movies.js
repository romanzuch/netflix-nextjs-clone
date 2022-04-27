import requests from '../utils/requests';
import List from '../components/list';
import MediaDetails from '../components/mediaDetails';
import { useEffect, useState } from 'react';

export default function Filme(props) {

  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [isInteractable, setIsInteractable] = useState(true);

  useEffect(() => {
    if (props.id === null) {
      setShowMovieDetails(false);
    } else if (props.id != null) {
      setShowMovieDetails(true);
    }
  }, [props.id]);

  return (
    <div className=''>
        <h1 className="text-4xl mx-5">Movies</h1>
        <div className='flex flex-col mt-8'>
          {
            Object.entries(requests).map(([key, {title, url, section}]) => (
              <List 
                key={key} 
                title={title}
                endpoint={url}
                router={props.router}
              />
            ))
          }
          {
            (showMovieDetails === true) ? <MediaDetails id={props.id} router={props.router} type='movie' /> : <></>
          }
        </div>
    </div>
  )
}

export function getServerSideProps(context) {
  try {
    const movieID = context.query.id;
    return {
      props: {
        id: movieID || null,
      }
    }
  } 
  catch (e) {
    console.log('There is currently no movie selected.')
  }
  
}