import React, {useContext} from 'react'
import {Context} from '../Context'
import {getClass} from '../utils'
import Image from '../comps/Image'

function Favorites() {
    const {favorites} = useContext(Context)

    const favs = favorites.map((photo, i) => {
            return (
                <Image key={photo.id} img={photo} className={getClass(i)} />
            )
        })

    return (
        <main className="photos">
            {favs}
        </main>
    )
}

export default Favorites

//make it so it looks good with just one pic on it. Right now it stretchs across the 
//whole screen but gets like wide screen. weird looking