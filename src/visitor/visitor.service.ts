import {VisitorInput, VisitorSchema} from "./visitor.data";
import {ServiceSupport} from "../lib/service.support";
import {VisitorServiceInterface} from "./visitor.service.interface";

export class VisitorService extends ServiceSupport implements VisitorServiceInterface {
    constructor(baseURL: string, timeout?: number, headers?: { [key: string]: string | number; }) {
        super(baseURL, timeout, headers);
    }

    get(input: VisitorInput): Promise<any> {
        const req = this.safeParser(VisitorSchema, input);
        return this.httpService.doGet(`/api/v1/livechat/visitor/${req.phone}`).then(resp => resp.visitor);
    }
}