import './styles.css';

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-md bg-primary main-nav">
                <div className="container-fluid">
                    <a href="link" className="nav-logo-text">
                        <h4>Alphatec Sistemas</h4>
                    </a>
                    <div className='collapse navbar-collapse'>
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
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;