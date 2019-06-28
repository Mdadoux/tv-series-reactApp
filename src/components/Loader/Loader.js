import React from 'react';
import imgLoader from '../../assets/imgs/loader.gif';
const Loader = props => {

    return (
        <div className="loader-container">
            <img src={imgLoader} alt="loading icon" />

        </div>
    )
}
export default Loader;