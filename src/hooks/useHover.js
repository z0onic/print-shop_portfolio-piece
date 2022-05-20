import {useState, useEffect, useRef} from 'react'


function useHover() {
    const [hovered, setHovered] = useState(false)
    const iconRef = useRef(null)
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)
    
    useEffect(() => {
        const icon = iconRef.current
        icon.addEventListener('mouseenter', enter)
        icon.addEventListener('mouseleave', leave)
        return () => {
            icon.removeEventListener('mouseenter', enter)
            icon.removeEventListener('mouseleave', leave)
        }
    }, [])

    return [iconRef, hovered]
}

export default useHover