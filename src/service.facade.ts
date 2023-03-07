import {RoomServiceInterface} from "./room/room.service.interface";
import {VisitorServiceInterface} from "./visitor/visitor.service.interface";
import {RoomService} from "./room/room.service";
import {VisitorService} from "./visitor/visitor.service";

export interface ServiceFacadeInterface {
    rooms: RoomServiceInterface;

    visitors: VisitorServiceInterface;
}

export type ServiceSettings = {
    namespace: string,
    internal?: boolean;
    credentials?: {
        token: string,
        userId: string
    }
}

export const New = (settings: ServiceSettings) :ServiceFacadeInterface =>  {
    return new ServiceFacade(settings);
}

class ServiceFacade implements ServiceFacadeInterface {
    private readonly roomService: RoomServiceInterface;
    private readonly visitorService: VisitorServiceInterface;
    constructor(settings: ServiceSettings) {
        let baseUrl = `https://${settings.namespace}.sheeps.chat`;
        if (settings.internal) {
            baseUrl = `http://chat-sheeps.${settings.namespace}.svc.cluster.local`;
        }
        let headers: any;
        if (settings.credentials) {
            headers = {
                'X-Auth-Token': settings.credentials.token,
                'X-User-Id': settings.credentials.userId,
                'Content-type': 'application/json'
            }
        }
        this.roomService = new RoomService(baseUrl, 10_000, headers);
        this.visitorService = new VisitorService(baseUrl, 10_000, headers);
    }

    get rooms(): RoomServiceInterface {
        return this.roomService;
    }

    get visitors(): VisitorServiceInterface {
        return this.visitorService;
    }
}