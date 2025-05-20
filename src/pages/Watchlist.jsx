import React, { useContext, useState } from 'react'
import GenreFilter from '../components/GenreFilter'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'

const Watchlist = () => {
  const { WatchList, genrelist } = useContext(WatchListContext)
  const [search, setsearch] = useState("")
  const [selectedgenre, setselectedgenre] = useState()

  const filteredMovies = WatchList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.overview.toLowerCase().includes(search.toLowerCase())
  ).filter((movie) => {
    return !selectedgenre || movie.genre_ids.includes(Number(selectedgenre))
  })

  return (
    <div className='p-4 pt-16'>
      <input
        type="text"
        placeholder="Search Movies..."
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-600/60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
        onChange={(e) => setsearch(e.target.value)}
      />
      <div className='mt-16 flex justify-center'>
        <GenreFilter genrelist={genrelist} setselectedgenre={setselectedgenre} />
      </div>
      <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
        {filteredMovies.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Watchlist
