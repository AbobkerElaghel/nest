class CustomException extends Error {
     statusCode: number;
     createdAt: string;

     constructor(message: string, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.createdAt = new Date().toISOString();
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomException;