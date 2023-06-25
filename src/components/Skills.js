import './skills.scss'

const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-items">
                        <div className='skills-li'>
                            <i class="devicon-html5-plain skills-icon"></i>
                            <span className='skills-text'>html</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-css3-plain skills-icon"></i>
                            <span className='skills-text'>css</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-javascript-plain skills-icon"></i>
                            <span className='skills-text'>javascript</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-sass-original skills-icon"></i>
                            <span className='skills-text'>sass</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-react-original skills-icon"></i>
                            <span className='skills-text'>react</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-git-plain skills-icon"></i>
                            <span className='skills-text'>git</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-github-original skills-icon"></i>
                            <span className='skills-text'>github</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-nodejs-plain skills-icon"></i>
                            <span className='skills-text'>nodejs</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-express-original skills-icon"></i>
                            <span className='skills-text'>express</span>
                        </div>
                        <div className='skills-li'>
                            <i class="devicon-jest-plain skills-icon"></i>
                            <span className='skills-text'>jest</span>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Skills