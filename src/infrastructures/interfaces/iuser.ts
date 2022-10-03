import { iClient } from './iclient';
import { iProperty } from './iproperty';

export interface iUser {
    id: number;
    token: string;
    name: string;
    alias: string;
    email: string;
    phoneNumber: string;
    address: string;
    clients: Array<iClient>;
    properties: Array<iProperty>;
}
