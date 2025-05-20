import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const Home = () => {
    const [movies, setMovies] = useState([])
    const [page, setpage] = useState(1)
    const [search, setsearch] = useState("")

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${API_KEY}`

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
        }

            fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch(err => console.error("Error fetching data:", err));
    },[page,search])



 

    return (
        <div className='p-4 pt-16'>
            <input
                type="text"
                placeholder="Search Movies..."
                className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-600/60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
                onChange={(e) => setsearch(e.target.value)}
            />

            <div className='movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
                {movies.map(movie => (
                    <Moviecard key={movie.id} movie={movie} />
                ))}
            </div>

            <div className='pagination-container flex justify-between mt-5'>
                <button disabled={page == 1} className='p-2 bg-gray-700 text-white rounded cursor-pointer' onClick={() => { setpage(prev => prev - 1) }}>PREV</button>
                <button className='p-2 bg-gray-700 text-white rounded cursor-pointer' onClick={() => { setpage(prev => prev + 1) }}>NEXT</button>
            </div>
        </div>
    )
}

export default Home