import BaseError from '@/utils/error/BaseError';

class Error404 extends BaseError {
  statusCode = 404;

  errorType = 'NOT_FOUND';

  constructor(message: string, private property?: string) {
    super(message);

    Object.setPrototypeOf(this, Error404.prototype);
  }

  serializeErrors() { return [{ message: this.message, property: this.property }]; }
}

export default Error404;
