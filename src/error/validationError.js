
export class ValidationError extends Error {
    constructor(error) {
        super(error.details[0].message);
        this.code = 'VALIDATION_ERROR'
    }
}