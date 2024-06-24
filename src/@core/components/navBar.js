export default function Navbar(){
    return (
        <header>
        <div className="logo">
            <p>Developer</p>
            {/* <img src={bannerImage}></img> */}

        </div>
        <input type='checkbox' id='nav_check' hidden></input>
        <nav>
        <div className="logo">
            {/* <img src={bannerImage}></img> */}
            <p>Developer</p>

        </div>
        <ul>
            <li>
                <a href='/' className='active'>Home</a>
            </li>
            <li>
                <a href='/animation'>Animation</a>
            </li>
            <li>
                <a href='/'>services</a>
            </li>
            <li>
                <a href='/'>contact</a>
            </li>
            <li>
                <a href='/'>login</a>
            </li>
            <li>
                <a href='/themeCard'>Theme card</a>
            </li>
        </ul>

        </nav>
        <label for='nav_check' className='hamburger'>
            <div></div>
            <div></div>
            <div></div>
            
        </label>
    </header>
    )
}