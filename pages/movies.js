import { movieData } from "../public/assets/data"
import MediaEntry from "../components/mediaEntry"

export default function Filme() {

  return (
    <div className='m-5'>
        <h1 className="text-6xl">Movies</h1>
        <div className='flex flex-row p-8'>
          {movieData.map((data, key) => {
            return (
              <div key={key}>
                <MediaEntry data={data} />
              </div>
            )
          })}
        </div>
    </div>
  )
}
