import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { Utils, SESMessage } from "@libraries";

export class EmailService {
    private readonly utils: Utils = new Utils();
    private readonly SESClient: SESClient;
    private readonly sourceEmail: string;

    constructor() {
        this.SESClient = new SESClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
                secretAccessKey: process.env.AWS_SECRET_KEY as string
            }
        });
        this.sourceEmail = process.env.SOURCE_EMAIL as string;
    }

    async send(destination: string | string[], message: SESMessage) {
        const addresses = Array.isArray(destination) ? destination : [destination];

        const sendEmail = this.SESClient.send(new SendEmailCommand({
            Destination: { ToAddresses: addresses }, Message: message, Source: this.sourceEmail
        })).catch(err => {
            console.error(err);
            return null;
        });

        await this.utils.sleep(1);

        return sendEmail;
    }
}