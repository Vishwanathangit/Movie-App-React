import React from 'react'

const GenreFilter = ({ genrelist, setselectedgenre }) => {
    return (
        <div>
            <select
                  className="w-60 p-2 mb-4 bg-gray-900/60 backdrop-blur-md text-white border rounded hide-scrollbar"
                onChange={(e) => setselectedgenre(e.target.value)}
            >
                <option value="">All Genres</option>
                {genrelist.map(genre => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default GenreFilter
