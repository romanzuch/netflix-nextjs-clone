import requests from '../utils/requests';
import List from '../components/list';

export default function Filme() {

  return (
    <div className='m-5'>
        <h1 className="text-4xl">Movies</h1>
        <div className='flex flex-col mt-8'>
          {
            Object.entries(requests).map(([key, {title, url, section}]) => (
              <List 
                key={key} 
                title={title}
                endpoint={url}
              />
            ))
          }
        </div>
    </div>
  )
}