
import './styles.css'
import ProductImg from 'assets/imges/logo_Symac.png'

const ProductCard = () => {
    return (
        <div className='base-card product-card'>
            <div className='card-top-container' >
                <img src={ProductImg} alt="" />

            </div>
            <div className='card-bottom-container'>
                <h6>Sistema de Gestão </h6>
                <p>Sistemma de gestão Symac</p>

            </div>

        </div>
    )
}
export default ProductCard