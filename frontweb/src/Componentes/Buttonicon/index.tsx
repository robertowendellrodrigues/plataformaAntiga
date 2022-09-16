import './styles.css';
import { ReactComponent as IconeSeta } from 'assets/imges/seta.svg';

const Buttonicon = () => {
    return (
        <div className='btn-container'>            
                <button type="button" className="btn btn-primary botao">
                    <h6>INICIE AGOA SUA BUSCA</h6>
                </button>            
            <div className='btn-icon-container'>
                <IconeSeta />
            </div>
        </div>
    )
}
export default Buttonicon;