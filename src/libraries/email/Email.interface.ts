export enum Charset {
    UTF8 = "UTF-8",
    SHIFT = "Shift_JIS",
    ISO = "ISO-8859-1"
}

export interface SESMessage {
    Body: { Html: { Data: string, Charset: Charset } },
    Subject: { Data: string, Charset: Charset }
}