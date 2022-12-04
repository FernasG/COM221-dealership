import { Utils, SESService, Charset, MessageAttributes } from "@libraries";
import { compile as HBSCompiler } from "handlebars";
import path from "path";
import fs from "fs";

export class EmailService {
    private readonly utils: Utils = new Utils();
    private readonly sesService: SESService = new SESService();
    private readonly sourceEmail: string;
    private readonly emailTemplate: string;

    constructor() {
        this.sourceEmail = process.env.SOURCE_EMAIL as string;
        this.emailTemplate = fs.readFileSync(path.join('public', 'views', 'emails', 'StockItemUpdated.hbs')).toString();
    }

    async send(destination: string | string[], attrs: MessageAttributes) {
        const addresses = Array.isArray(destination) ? destination : [destination];

        const HTML = HBSCompiler(this.emailTemplate);

        const sendEmail = this.sesService.send({
            Destination: { ToAddresses: addresses }, Source: this.sourceEmail,
            Message: {
                Body: { Html: { Data: HTML(attrs), Charset: Charset.UTF8 } },
                Subject: { Data: '[Dealership] - Stock Update', Charset: Charset.UTF8 }
            }
        });

        await this.utils.sleep(1);

        return sendEmail;
    }
}