import {RocketJSError} from "./error";

export class HttpServiceError extends RocketJSError {
    constructor(code?: string, statusCode?: number, message?: string, details?: any) {
        super("HttpServiceError", code, statusCode, message, details);
    }
}