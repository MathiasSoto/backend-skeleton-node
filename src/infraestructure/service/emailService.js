import nodemailer from "nodemailer";
import { configOptions, fromEmailAddress } from "../../../config/email";
import { SendEmailError } from "../../application/error/emailError";

const emailEngine = () => {
    return nodemailer.createTransport(configOptions);
}

export const send = async (from, to, subject, data, template = null) => {

    try {
        const mailOptions = {
            from,
            to,
            subject,
            text: 'That was easy!'
        };

        const response = await emailEngine().sendMail(mailOptions);
    } catch (error) {
        throw new SendEmailError(error.message);
    }
}

export const sendNewAccountEmail = async (to, data) => {
    const from = fromEmailAddress.info;
    const subject = "Welcome new account";
    await send(from, to, subject, data, "");
}