
export class SendEmailError extends Error {
    constructor(message) {
        super(`Send email not found : ${message}`);
        this.code = 'SEND_EMAIL_ERROR'
    }
}