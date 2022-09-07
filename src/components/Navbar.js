import './navbar.scss'

export default function Header(){
    return(
        <nav className="navbar">
            <h1>RE</h1>
            <div className='list-container'>
                <ul>
                    <li><span>&lt;a</span><a href='#'> About <span>/&gt;</span></a></li>
                    <li><span>&lt;a</span><a href='#'>Experience<span>/&gt;</span></a></li>
                    <li><span>&lt;a</span><a href='#'>Projects <span>/&gt;</span></a></li>
                    <li><span>&lt;a</span><a href='#'>Contact <span>/&gt;</span></a></li>
                    <button type='button'>Resume</button>
                </ul>
            </div>
        </nav>
    )
}