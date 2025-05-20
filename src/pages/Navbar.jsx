import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'
const Navbar = () => {
    const {WatchList} = useContext(WatchListContext)
    return (
        <div>
            <nav className='bg-gray-900 p-4 text-white flex justify-between fixed w-full top-0 z-10'>
                <Link className='text-xl font-bold' to="/">Movie App</Link>
                <Link className='text-xl' to="/watchlist">WatchList({WatchList.length})</Link>
            </nav>
        </div>
    )
}

export default Navbar
