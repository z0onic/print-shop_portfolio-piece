import React, {useContext} from 'react'
import Image from '../comps/Image'
import {Context} from '../Context'

export default function Modal({img}) {
    const {setZoom} = useContext(Context)
    
    const closeIcon = (
        <i 
            class="ri-close-circle-fill close"
            onClick={() => setZoom(false)}
        ></i>
    )
    
    return (
        <div className="overlay">
            <div className="zoomed">
                <div className="zoomed-img">
                    <Image key={img.id} img={img} />
                    {closeIcon}
                </div>
            </div>
        </div>
    )
}

//add media query so it looks good on phone screens