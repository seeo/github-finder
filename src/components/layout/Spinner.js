import React, { Fragment } from 'react'
import spinner from './spinner.gif';

//stateless functional component

const Spinner = () =>
    <Fragment>
        <img
            src = {spinner}
            alt = "Loading..."
            style =  {spinnerStyle}
        />
    </Fragment>
// above in styles: we need display block so that we can do margin auto;

const spinnerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block',
}

export default Spinner