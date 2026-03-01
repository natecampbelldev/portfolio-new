export default function Project({item}) {
    const projects = [
        {
            title: 'name',
            tools: ['HTML', 'CSS', 'JS'],
            thumb: {
                img: 'src path',
                alt: 'text'
            },
            desc: 'description',
            chals: [
                {
                    challenge: 'issue',
                    solution: 'what I did'
                },
            ],
            link: 'url'
        }
    ]

    const listItems = projects[item].tools.map((t, i) => <li key={tool - i}>{t}</li>)

    const challenges = projects[item].chals.map((c, i) => (<div key={chal - i}>
        <h4>{c.challenge}</h4>
        <p>{c.solution}</p>
    </div>))

    return (
        <article>
            <header>
                <h2>{projects[item].title}</h2>
            </header>
            <section>
                <figure>
                    <img src={projects[item].thumb.img} alt={projects[item].thumb.alt} />
                    <figcaption>{projects[item].desc}</figcaption>
                </figure>
                <ul>
                    {listItems}
                </ul>
                <div>
                    {challenges}
                </div>
            </section>
            <footer>
                <a href={projects[item].link}>Check it out on GitHub</a>
            </footer>
        </article>
    )
}