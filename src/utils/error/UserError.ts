import BaseError from "./BaseError";

class UserError extends BaseError {
    statusCode = 400;

    errorType = 'BAD_REQUEST';


    constructor(message: string, private property?: string) {
        super(message)


        Object.setPrototypeOf(this, BaseError.prototype);

    }

    serializeErrors() {
        return [{ message: this.message, property: this.property }]
    }
}

export default UserError