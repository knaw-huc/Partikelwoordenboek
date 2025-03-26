import React from 'react';
import {useNavigate, Link} from "react-router-dom";
import "../assets/css/style.css";

export default function PageHeader() {
    const nav = useNavigate();
    return (
        <div>
            <div className="hcContentContainer pageHeader">
                <header className="hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo">

                        </div>
                    </div>
                    <div className="hcTitle" onClick={() => {nav('/')}}>
                        
                    </div>
                    <div className="navi">

                    </div>
                </header>
            </div>
            <div className="filler"></div>
        </div>)
}
