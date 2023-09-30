export abstract class CustomError extends Error {
    abstract statusCode: number;
  
    constructor(message: string) {
      super(message);
      Object.setPrototypeOf(this, new.target.prototype);
    }

        
}

export class ValidationError extends CustomError {
    statusCode = 400;
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  export class NotFoundError extends CustomError {
    statusCode = 404;
    constructor(message: string) {
      super(message);
      this.name = 'NotFoundError';
    }
  }
  