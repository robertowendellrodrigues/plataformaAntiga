import { ReactComponent as MainImage } from 'assets/imges/main-image.svg';
import Navbar from 'Componentes/Navbar';
import './styles.css'
import Buttonicon from 'Componentes/Buttonicon';

const Home = () => {
    return (
        <>
            
            <div className='home-container'>
                <div className='base-card home-card'>
                    <div className='home-content-container'>
                        <div>
                            <h1>Conheça nosso catálogo de produtos e serviços</h1>
                            <p>Ajudaremos você a encontrar soluções em sistemas e serviços para seu negócio</p>


                        </div>

                        <Buttonicon />
                    </div>
                    <div className='home-image-container'>
                        <MainImage />
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;
