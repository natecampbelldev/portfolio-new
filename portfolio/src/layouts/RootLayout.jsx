import { Link, Outlet } from "react-router"

export default function RootLayout(){
    return(
        <>
        <header>
            <h1>Nate Campbell</h1>
            <p>Full-Stack Developer || Artist || Musician || Foodie</p>
            <a href="#">GitHub</a> <a href="#">LinkedIn</a>
        </header>
        <aside>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </aside>
        <main>
            <Outlet />
        </main>
        <footer>
             <a href="#">GitHub</a> <a href="#">LinkedIn</a>
            <p>This is an S_Kimo Studios production &#169;2026</p>
        </footer>
        </>
    )
}