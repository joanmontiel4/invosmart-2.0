export interface iClient {
    id: number;
    token: string;
    name: string;
    status: string;
    services: Array<iService>;
}

interface iService {
    id: number;
    token: string;
    name: string;
}
