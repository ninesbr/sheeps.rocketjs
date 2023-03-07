import {RoomInput} from "./room.data";

export interface RoomServiceInterface {
    get(input: RoomInput): Promise<any>;
}