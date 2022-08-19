
export const configOptions = {
    host: "smtp.example.com",
    port: 587,
    tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    }
}

export const fromEmailAddress = {
    info: "info@domain.com"
};