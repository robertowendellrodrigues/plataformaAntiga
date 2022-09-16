import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
                <div className="container-fluid">
                    <a href="link" className="nav-logo-text">
                        <h4>Alphatec Sistemas</h4>
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#site-navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>


                    <div className='collapse navbar-collapse' id='site-navbar'>
                        <ul className='navbar-nav offset-md-2 main-menu'>
                            <li>

                                <a href="home" className='active'>Início</a>
                            </li>
                            <li>
                                <a href="catalog">Soluções</a>
                            </li>
                            <li>
                                <a href="link">Sistemas</a>
                            </li>
                            <li>
                                <a href="link">Quem somos</a>
                            </li>
                            <li>
                                <a href="link">Fale conosco</a>
                            </li>
                            <li>
                                <a href="login" >login</a>
                            </li>


                        </ul>

                    </div>

                </div>
            </nav>

        </>
    );
}

export default Navbar;