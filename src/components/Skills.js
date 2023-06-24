import './skills.scss'

const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-items">
                    <ul>
                        <li className='skills-li'><i class="devicon-html5-plain skills-icon"></i><span className='skills-text'>html</span></li>
                        <li className='skills-li'><i class="devicon-css3-plain skills-icon"></i><span className='skills-text'>css</span></li>
                        <li className='skills-li'><i class="devicon-javascript-plain skills-icon"></i><span className='skills-text'>javascript</span></li>
                        <li className='skills-li'><i class="devicon-sass-original skills-icon"></i><span className='skills-text'>sass</span></li>
                        <li className='skills-li'><i class="devicon-react-original skills-icon"></i><span className='skills-text'>react</span></li>
                        <li className='skills-li'><i class="devicon-git-plain skills-icon"></i><span className='skills-text'>git</span></li>
                        <li className='skills-li'><i class="devicon-github-original skills-icon"></i><span className='skills-text'>github</span></li>
                        <li className='skills-li'><i class="devicon-nodejs-plain skills-icon"></i><span className='skills-text'>nodejs</span></li>
                        <li className='skills-li'><i class="devicon-express-original skills-icon"></i><span className='skills-text'>express</span></li>
                        <li className='skills-li'><i class="devicon-jest-plain skills-icon"></i><span className='skills-text'>jest</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills