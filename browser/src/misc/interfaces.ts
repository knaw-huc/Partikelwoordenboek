export interface IResultItem {
    ID: string,
    ingang: string,
    omgeving: string,
    hoofdingang: string,
    literatuur: string,
    intonatie: string,
    subtype: ISubtype[]
}

export interface ISubtype {
    functie: string,
    gebruik: string,
    opmerking: string,
    parafrase: string,
    voorbeeld: string
}

export interface IDetail {
    amount: number,
    items: IResultItem[]
}
