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
                               
                            <a href="link" className='active'>Início</a>
                            </li>
                            <li>
                                <a href="link">Cadastro</a>
                            </li>
                            <li>
                                <a href="link">Pedido </a>
                            </li>
                            <li>
                                <a href="link">Consulta</a>
                            </li>
                            <li>
                                <a href="link">Relatório</a>
                            </li>
                            <li>
                                <a href="link" >login</a>
                            </li>
                            
                            
                        </ul>
                        
                    </div>
                    
                </div>
            </nav>

        </>
    );
}

export default Navbar;