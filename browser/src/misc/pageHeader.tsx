import React from 'react';
import {useNavigate, Link} from "react-router-dom";
import logo from '../assets/img/logo.png';
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
                        Partikelwoordenboek
                    </div>
                    <div className="navi">
                        <div><Link to='https://goetgevonden.nl/help/gebruik-van-de-entiteitenbrowser/'>Help</Link></div>
                        <div><Link to='mailto:republic_goetgevonden@huygens.knaw.nl'>Contact</Link></div>
                    </div>
                </header>
            </div>
            <div className="filler"></div>
        </div>)
}
