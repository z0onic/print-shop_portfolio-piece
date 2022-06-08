import React, {useContext} from 'react'
import Image from '../comps/Image'
import {getClass} from '../utils'
import {Context} from '../Context'

export default function Photos() {
    const {allPhotos, searchWord, setSearchWord, setSearch} = useContext(Context)
    const photosHtml = allPhotos.map((photo, i) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(i)} />
        )
    })

    const handleSearch = e => {
        e.preventDefault()
        setSearch(true)
    }

    return (
        <main className="photo-page">
            <form className="search">
                <input type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)} />
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
            <div className="photos">
                {
                    allPhotos.length === 0 ?
                    <h3> No results found </h3> :
                    photosHtml
                }
            </div>
        </main>
    )
}