import React from "react";

export default function DetailRow({label, value}: {label: string, value: string | undefined})
{
    const notEmpty: boolean = value !== "" && value !== undefined && value !== null;

    return (
        <>
            {notEmpty && <div>
                <div className="detailItemLabel">{label}:</div>
                    <div className="detailItemValue">{value}</div>
            </div>}
        </>
    );
}