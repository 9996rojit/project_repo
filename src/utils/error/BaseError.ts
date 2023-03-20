abstract class BaseError extends Error {
  abstract statusCode:number;

  abstract errorType:string;

  constructor(message:string) {
    super(message);

    Object.setPrototypeOf(this, BaseError.prototype);
  }

  abstract serializeErrors(): { message:string, property?: string }[];
}

export default BaseError;
