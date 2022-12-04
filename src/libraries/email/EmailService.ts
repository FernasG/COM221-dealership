import { Utils, SESMessage, SESService } from "@libraries";

export class EmailService {
    private readonly utils: Utils = new Utils();
    private readonly sesService: SESService = new SESService();
    private readonly sourceEmail: string;

    constructor() {
        this.sourceEmail = process.env.SOURCE_EMAIL as string;
    }

    async send(destination: string | string[], message: SESMessage) {
        const addresses = Array.isArray(destination) ? destination : [destination];

        const sendEmail = this.sesService.send({ Destination: { ToAddresses: addresses }, Message: message, Source: this.sourceEmail });

        await this.utils.sleep(1);

        return sendEmail;
    }
}