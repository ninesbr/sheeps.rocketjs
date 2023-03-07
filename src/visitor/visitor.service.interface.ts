import {VisitorInput} from "./visitor.data";

export interface VisitorServiceInterface {
    get(input: VisitorInput): Promise<any>;
}