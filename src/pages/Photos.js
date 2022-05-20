import React, {useContext} from 'react'
import Image from '../comps/Image'
import {getClass} from '../utils'
import {Context} from '../Context'

export default function Photos() {
    const {allPhotos} = useContext(Context)
    const photosHtml = allPhotos.map((photo, i) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(i)} />
        )
    })
    // console.log(photos.allPhotos[0])
    return (
        <main className="photos">
            {photosHtml}
        </main>
    )
}