import { Link, Outlet } from "react-router"

export default function RootLayout(){
    return(
        <>
        <header style={{backgroundColor: "blue"}}></header>
        <aside style={{backgroundColor: "red"}}>
            <nav>
                <Link to="/about">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </aside>
        <main>
            <Outlet />
        </main>
        <footer style={{backgroundColor: "green"}}></footer>
        </>
    )
}