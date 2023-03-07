import {RoomServiceInterface} from "./room.service.interface";
import {ServiceSupport} from "../lib/service.support";
import {RoomInput, RoomSchema} from "./room.data";

export class RoomService extends ServiceSupport implements RoomServiceInterface {
    constructor(baseURL: string, timeout?: number, headers?: { [key: string]: string | number; }) {
        super(baseURL, timeout, headers);
    }

    get(input: RoomInput): Promise<any> {
        const req = this.safeParser(RoomSchema, input);
        return this.httpService.doGet(`/api/v1/livechat/room?token=${req.token}`).then(resp => resp.room);
    }

}