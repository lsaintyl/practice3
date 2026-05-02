import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Header() {
    return (
        <header>
            <h1><img src={logo} alt='Логотип' width={70} />Список задач</h1>
            <nav>
                <Link to="/">Задачи</Link> | <Link to="/about">О приложении</Link>
            </nav>
        </header>
    );
}

export default Header;
