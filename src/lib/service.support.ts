import {z, ZodType} from "zod";
import {ValidationError} from "./errors/validation.error";
import {HttpService} from "./http.service";

export class ServiceSupport {
    private readonly _httpService: HttpService;
    constructor(baseURL: string, timeout?: number, headers?: { [key: string]: string | number; }) {
        this._httpService = new HttpService(baseURL, timeout, headers);
    }
    safeParser<M>(schema: ZodType, obj: M) : M {
        const parsed: any = schema.safeParse(obj);
        if (!parsed.success) {
            throw ValidationError.withDetails(parsed.error.format());
        }
        return parsed.data;
    }

    protected get httpService(): HttpService {
        return this._httpService
    }
}