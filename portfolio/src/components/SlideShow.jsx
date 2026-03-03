import { useState, useEffect } from "react"

export default function SlideShow() {

    const [pic, setPic] = useState(0)

    // to hold multiple imgs used in slide show
    const pictures = [
        { img: 'path', alt: 'text' }
    ]

    // useEffect(() => {
    //     const slider = setInterval(() => {
    //         pic < pictures.length ? setPic(p => p + 1) : setPic(0)
    //     }, 5000)

    //     return () => clearInterval(slider)
    // })

    return <img src={pictures[pic].img} alt={pictures[pic].alt} />
}