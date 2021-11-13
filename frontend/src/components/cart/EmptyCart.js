import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layouts/MetaData'
// import {DepthOfFieldSnowfall} from 'react-snowflakes';

const emptyCart = ({ history }) => {

    return (
        <Fragment>
            <MetaData title={'Ihr leerer Warenkorb'} />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to = {'/'} style={{ color: "black", fontSize: "1.5rem" }}>Ihr Warenkorb ist noch leer. Füllen Sie ihn doch! :)</Link>
        </Fragment>
    )
}

export default emptyCart