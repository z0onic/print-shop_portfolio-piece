import React, {useContext} from 'react'
import Image from '../comps/Image'
import {getClass} from '../utils'
import {Context} from '../Context'

export default function Photos() {
    const {allPhotos, searchWord, setSearchWord} = useContext(Context)
    const photosHtml = allPhotos.map((photo, i) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(i)} />
        )
    })
    // console.log(allPhotos)
    return (
        <main className="photos">
            <form class="search">
                <input type="text" value={searchWord} />
                <button type="submit">Search</button>
            </form>
            {photosHtml}
        </main>
    )
}