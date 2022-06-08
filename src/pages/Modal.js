import React from 'react'
import Image from '../comps/Image'

export default function Modal({img}) {
    return (
        <div className="zoomed">
            <div className="zoomed-img">
                <Image key={img.id} img={img} />
            </div>
        </div>
    )
}

//add media query so it looks good on phone screens