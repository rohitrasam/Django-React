import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className='shadow sticky z-50 top-0'>
            <nav>
                <div>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/user'>User</Link>
                    </li>
                </div>
            </nav>
        </header>
    )
}

export default Header