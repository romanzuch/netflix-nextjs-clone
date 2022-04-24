import movieJSON from '../public/assets/movies.json';
import MediaEntry from "../components/mediaEntry";

export default function Filme() {

  const movieData = getMovieData();

  return (
    <div className='m-5'>
        <h1 className="text-6xl">Movies</h1>
        <div className='flex flex-col p-8'>
          {Object.keys(movieData).map((data, key) => {
            return (
              <div className='flex flex-col' key={key}>
                <h1 className='text-4xl mb-8'>{data}</h1>
                <container className='flex flex-row h-48 overflow-x-auto no-scrollbar overflow-y-auto p-4'>
                  {
                    movieData[data].map((data, key) => {
                      return (
                        <MediaEntry key={key} data={data} />
                      ) 
                    })
                  }
                </container>
              </div>
            )
          })}
        </div>
    </div>
  )
}

const getMovieData = () => {
  let string = JSON.stringify(movieJSON);
  let data = JSON.parse(string);
  return data;
}