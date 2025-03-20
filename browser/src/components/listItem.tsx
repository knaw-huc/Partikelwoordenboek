import React from 'react';
import {IResultItem} from '../misc/interfaces';
import {useNavigate} from "react-router-dom";


export default function ListItem({item}: { item: IResultItem }) {
    const nav = useNavigate();
    //const era = period(item.activity_hint_begin, item.activity_hint_end);


    return (
        <div className="hcResultListDetail">
            <div className="resultName">{item.ingang}</div>
            <div>{item.omgeving}</div>
        </div>
    );
}