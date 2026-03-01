import { useState } from "react"
import Project from "../components/Project"

export default function ProjectLayout() {

    const [display, setDisplay] = useState(0)

    // proper click handler to setDisplay to the button context
    const buttonHandler = e => {
        // setDisplay(e.target)
    }


    return (
        <>
            <Project item={display}/>
            <footer>
                <nav>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </nav>
            </footer>
        </>
    )
}