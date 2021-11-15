import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../layouts/MetaData'
import CheckoutSteps from './CheckoutSteps'

import { useSelector } from 'react-redux'

const ConfirmOrder = ({ history }) => {

    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    // const { user } = useSelector(state => state.auth)

    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    
    //Ab 50 EUR keine Versandkosten, darunter 10
    //Steuer 20%
    const shippingPrice = itemsPrice > 50 ? 0 : 10
    const taxPrice = Number((0.2 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const processToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }

        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        history.push('/payment')
    }

    return (
        <Fragment>

            <MetaData title={'Auftragsbestätigung'} />

            <CheckoutSteps shipping confirmOrder />

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h2 className="mb-3">Versandinformation</h2>
                    <p><b>Name:</b> {shippingInfo.name}</p>
                    <p><b>Email:</b> {shippingInfo.email}</p>
                    <p><b>Tel:</b> {shippingInfo.phoneNo}</p>
                    <p><b>Adresse:</b></p> 
                    <p>{shippingInfo.address}</p>
                    <p>{shippingInfo.postalCode} {shippingInfo.city}</p>
                    <p>{shippingInfo.country}</p>
                    <hr />
                    <h4 className="mt-4">Ihre Produkte:</h4>

                    {cartItems.map(item => (
                        <Fragment>
                            <hr />
                            <div className="cart-item my-1" key={item.product}>
                                <div className="row">
                                    <div className="col-4 col-lg-2">
                                        <img src={item.image} alt="Laptop" height="45" width="65" />
                                    </div>
                                    <div className="col-5 col-lg-6">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                        <p>{item.quantity} x € {item.price} = <b>€ {(item.quantity * item.price).toFixed(2)}</b></p>
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
                        <p>Produkte:  <span className="order-summary-values">€ {itemsPrice}</span></p>
                        <p>Versand: <span className="order-summary-values">€ {shippingPrice}</span></p>
                        <p>Mwst (20%):  <span className="order-summary-values">€ {taxPrice}</span></p>

                        <hr />

                        <p>Gesamt: <span className="order-summary-values">€{totalPrice}</span></p>

                        <hr />
                        <button className="lab-btn btn-block py-3" style={{ color: "white" }} onClick={processToPayment}>Weiter zur Bezahlung</button>
                    </div>
                </div>


            </div>

        </Fragment>
    )
}

export default ConfirmOrder