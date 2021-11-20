import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layouts/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'
import EmptyCart from './EmptyCart'


const Cart = ({ history }) => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQty = (id, quantity) => {

        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addItemToCart(id, newQty))

    }

    // const checkoutHandler = () => {
    //     history.push('/login?redirect=shipping')
    // }

    return (
        <Fragment>
            <MetaData title={'Ihr Warenkorb'} />

            {cartItems.length === 0 ? 
            <EmptyCart/>
          
            : (
                <Fragment>
                    <div>

                    <h2 className="mt-5">Ihr Warenkorb: <b>{cartItems.length} Produkt</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                            {cartItems.map(item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.product}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.image} alt="Laptop" height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">€ {item.price}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={() => increaseQty(item.product, item.quantity, item.stock)}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeCartItemHandler(item.product)} ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            ))}

                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Zusammenfassung</h4>
                                <hr />
                                <p>Menge:  <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} Stück</span></p>
                                <p>Gesamt (Netto): <span className="order-summary-values">€ {cartItems.reduce((acc, item) => (acc + item.quantity * item.price)*0.87, 0).toFixed(2)}</span></p>
                                <p>Gesamt (13% MWST): <span className="order-summary-values">€ {cartItems.reduce((acc, item) => (acc + item.quantity * item.price)*0.13, 0).toFixed(2)}</span></p>
                                <p>Versandkosten: <span className="order-summary-values">€ 0.00</span></p>
                                <p>Gesamt: <span className="order-summary-values">€ {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</span></p>
                                <hr />
                                <Link to="/Shipping"  className="lab-btn btn btn-block" ><span>Weiter</span></Link>
                              
                            
                            </div>
                        </div>
                    </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart
