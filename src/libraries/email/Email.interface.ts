export enum Charset {
    UTF8 = "UTF-8",
    SHIFT = "Shift_JIS",
    ISO = "ISO-8859-1"
}

export interface MessageAttributes {
    quantity: number,
    username: string,
    oldQuantity: number,
    vehicleName: string
}