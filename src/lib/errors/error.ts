export class RocketJSError extends Error {
    private readonly code: string
    private readonly statusCode: number;
    private readonly details: any;

    constructor(name?: string, code?: string, statusCode?: number, message?: string, details?: any) {
        super(message);
        this.code = code;
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}