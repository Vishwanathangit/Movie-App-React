import { Children, createContext, useEffect, useState } from "react";
import React from "react";
export const WatchListContext = createContext()
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export const WatchListProvider = ({ children }) => {
    const [WatchList, SetWatchList] = useState([])
    const [genrelist, setgenrelist] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => setgenrelist(data.genres || []))
            .catch(err => console.error("Error fetching data:", err));
    }, [])

    const toggleWatchlist = (movie) => {
        const index = WatchList.findIndex((m) => m.id === movie.id)

        if (index === -1) {
            SetWatchList([...WatchList, movie])
        } else {
            SetWatchList([...WatchList.slice(0, index), ...
                WatchList.slice(index + 1)
            ])
        }
    }

    return (
        <WatchListContext.Provider value={{ WatchList, toggleWatchlist, genrelist }}>{children}</WatchListContext.Provider>
    )
}