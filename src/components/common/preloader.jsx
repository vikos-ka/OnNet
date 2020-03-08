import React from 'react';
import loader from "../../assets/img/loader.svg"

const Preloader = (props) => {
    return <>
        <img src={loader} alt = "spinner" />

    </>
}

export default Preloader;