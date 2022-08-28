
export class AuthenticationError extends Error {
    constructor() {
        super("User credentials not found");
        this.code = 'AUTHENTICATION_ERROR'
    }
}