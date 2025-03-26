import React from "react";
import {IDetail, IResultItem} from "../misc/interfaces";
import {useNavigate} from "react-router-dom";
import DetailRow from "./detailRow";

export default function Detail({data} : {data: IDetail}) {
    const nav = useNavigate();
    return (
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <div className="justify hcMarginBottom1">
                    <h1>{data.items[0].ingang}</h1>
                    <DetailRow label="Ingang" value={data.items[0].ingang}/>
                    <DetailRow label="Hoofdingang" value={data.items[0].hoofdingang}/>
                    <DetailRow label="Intonatie" value={data.items[0].intonatie}/>
                    <DetailRow label="Literatuur" value={data.items[0].literatuur}/>
                    <h3>Subtypes</h3>
                    <div className="subType">
                        {data.items[0].subtype.map((item, index) => {
                            return (
                                <div className="subtype" key={index}>
                                    <h4>Subtype {index+1}</h4>
                                    <DetailRow label="Functie" value={item.functie}/>
                                    <DetailRow label="Gebruik" value={item.gebruik}/>
                                    <DetailRow label="Parafrase" value={item.parafrase}/>
                                    <DetailRow label="Voorbeeld" value={item.voorbeeld}/>
                                    <DetailRow label="Opmerking" value={item.opmerking}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="hcClickable" onClick={() => {nav(-1)}}>Terug naar vorige pagina </div></div></div>
    )
}