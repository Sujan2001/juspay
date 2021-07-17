import React, { Component } from 'react'
import "./Loader.css";
import $ from "jquery";
export class Loader extends Component {


    componentDidMount(){
 setTimeout(()=>{
$("#logo").css('opacity', '0.5');
$("#logo").hide();

}, 4650);
    }
    render() {
        return (
            <div>
                <div className="loader-main">
                    <div className="loader-inner">
                    <img id="logo" className="logo-img" src="https://www.juspay.in/logo_juspay.svg" alt="Jespay-logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader
