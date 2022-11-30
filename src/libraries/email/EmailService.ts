import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { Charset } from "./Email.interface";

export class EmailService {
    private readonly SESClient: SESClient;

    constructor() {
        this.SESClient = new SESClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_SECRET_KEY as string,
                secretAccessKey: process.env.AWS_ACCESS_KEY_ID as string
            }
        });
    }

    async send(destination: string | string[]) {
        const addresses = Array.isArray(destination) ? destination : [destination];

        const sendEmail = this.SESClient.send(new SendEmailCommand({
            Destination: { ToAddresses: addresses },
            Message: {
                Body: {
                    Html: { Data: '<p>Hello Fellow friend</p>', Charset: Charset.UTF8 }
                },
                Subject: { Data: '', Charset: Charset.UTF8 }
            },
            Source: process.env.SOURCE_EMAIL
        })).catch(err => {
            console.error(err);
            return null;
        });

        return sendEmail;
    }
}