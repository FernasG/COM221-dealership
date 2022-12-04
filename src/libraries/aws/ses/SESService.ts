import { SendEmailCommand, SendEmailCommandInput, SendEmailCommandOutput, SESClient } from "@aws-sdk/client-ses";

export class SESService {
    private readonly SESClient: SESClient;

    constructor() {
        this.SESClient = new SESClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
                secretAccessKey: process.env.AWS_SECRET_KEY as string
            }
        });
    }

    async send(input: SendEmailCommandInput): Promise<SendEmailCommandOutput | null> {
        return this.SESClient.send(new SendEmailCommand(input)).catch(err => {
            console.error(err);
            return null;
        });
    }
}