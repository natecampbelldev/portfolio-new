export default function Resume() {
    return (<>
        <article>
            <section className="">
                <h2>Summary:</h2>
                <p>Motivated full-stack developer with hands-on experience using JavaScript, React, Node.js, and MongoDB. Passionate about building efficient, user-friendly applications and contributing to collaborative tech teams.
                </p>
            </section>
            <section>
                <h2>Skills:</h2>
                <div className="flex">
                    <ul>
                        <h4>Technical Tools</h4>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>SVG</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>GitHub</li>
                        <li>Postman</li>
                        <li>VSCode</li>
                    </ul>
                    <ul>
                        <h4>Transferable</h4>
                        <li>Communication</li>
                        <li>Organization</li>
                        <li>Problem Solving</li>
                        <li>Conflict Resolution</li>
                        <li>Time Management</li>
                        <li>Leadership</li>
                    </ul>
                </div>
            </section>
            <section className="flex">
                <div>
                <h2>Education:</h2>
                <ul>
                    <li>GED, Daytona State College</li>
                    <li>Massage Therapy Certification, Daytona College </li>
                    <li>Full-Stack Development Certification, Persevere</li>
                </ul>
                </div>
                <div>
                <h2>Training:</h2>
                <ul>
                    <li>Full-Stack Development, Persevere</li>
                    <li>Competent Communicator, Toastmasters</li>
                    <li>ServSafe Management, ServSafe</li>
                    <li>Massage Therapy, Daytona College</li>
                </ul>
                </div>
            </section>
            <section>
                <h2>Work History:</h2>
                <ul>
                    <li>
                        <div>
                            <h4>Teaching Assistant / Peer Mentor</h4>
                            <p>Persevere, Wakulla Divison <span>2025-2026</span></p>
                            <ul className="dots">
                                <li>Assisted with teaching and mentoring for the Persevere Program, particularly with student development in HTML, CSS, JavaScript, React, Node.Js , and other full stack development credentials</li>
                                <li>Led a team of 16 students through their projects and assignments</li>
                                <li>Delivered lectures and troubleshooting support to improve student outcomes.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Line Cook</h4>
                            <p>Ormond Garage, Ormond Beach <span>2019-2021</span></p>
                            <ul className="dots">
                                <li>Creating weekly specials which boosted sales by 20%</li>
                                <li>Use time management skills and ServSafe standards to lead the team to deliver high quality food in under 15 minutes</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    </>)
}