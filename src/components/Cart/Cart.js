import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
    const { cart, total } = useContext(CartContext)

    if (cart.length === 0 ){ 
        return ('No hay productos')
    }else {
        return (
        <div className='cartCount'>
            <h1>Mi carrito</h1>
            <div className='cart'>
            {
                cart.map(prod => {
                    return (
                        <div className='cartDetail' key={prod.id}>
                            <div className="col-md-4 imgBody">
                                <img src={prod.img} alt="imagen"/>
                            </div>
                        <h1 className='cartName'>Producto: {prod.title}</h1>
                        <p className='totalProduct'>Cantidad: {prod.quantity}</p>
                        <p className='totalProduct'>Precio: {prod.price}</p>
                        </div>
                    )
                })
            }
            </div>
            <div className='total'>Precio total de la compra: ${total} </div>
            <Link className='button' to='/checkout'>Finalizar compra</Link>
        </div>
    )
    }
}

export default Cart