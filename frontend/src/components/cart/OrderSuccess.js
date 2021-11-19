import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layouts/MetaData'

const OrderSuccess = () => {
    return (
        <Fragment>

            <MetaData title={'Erfolg'} />

            <div className="row justify-content-center">
            <div className="banner-thumb">
                        <img src="/images/banner/01.png" alt="" />
                    </div>
                
                <div className="col-6 mt-5 text-center">
                    {/* <img className="my-5 img-fluid d-block mx-auto" src="/images/santa.jpg" alt="Order Success" width="200" height="200" /> */}
                    
                  
                    
                    
                    <h2>Dankeschön! Ihr Tannenbaum ist unterwegs zu Ihnen! Frohe Weihnachten!</h2>
                    {/* <Link to="/orders/me">Meine Aufträge</Link> */}
                </div>
            </div>

        </Fragment>
    )
}
export default OrderSuccess
