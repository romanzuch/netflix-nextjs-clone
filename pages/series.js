import { tvRequests } from '../utils/requests';
import List from '../components/list';
import MediaDetails from '../components/mediaDetails';
import { useEffect, useState } from 'react';

export default function Filme(props) {

  const [showTVDetails, setShowTVDetails] = useState(false);
  const [isInteractable, setIsInteractable] = useState(true);

  useEffect(() => {
    if (props.id === null) {
        setShowTVDetails(false);
    } else if (props.id != null) {
        setShowTVDetails(true);
    }
  }, [props.id]);

  return (
    <div className='flex flex-col'>
        <h1 className="text-4xl mx-5">Series</h1>
        <div className='flex flex-col mt-8'>
          {
            Object.entries(tvRequests).map(([key, {title, url, section}]) => (
              <div key={key}>
                <List 
                  title={title}
                  endpoint={url}
                  router={props.router}
                />
              </div>
            ))
          }
          {
            (showTVDetails === true) ? <MediaDetails id={props.id} router={props.router} type='series' /> : <></>
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
    console.log('There is currently no series selected.')
  }
  
}