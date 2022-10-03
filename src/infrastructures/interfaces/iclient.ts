export interface iClient {
    id: number;
    token: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    status: string;
    services: Array<iService>;
}

interface iService {
    id: number;
    token: string;
    concept: string;
    quantity: number;
    unitPrice: number;
}
