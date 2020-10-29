class CustomException extends Error {
     statusCode: number;
     createdAt: string;

     constructor(message: string, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.createdAt = new Date().toISOString();
        // to check of the the error is operational error not programming error or an error with one of the packages
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomException;