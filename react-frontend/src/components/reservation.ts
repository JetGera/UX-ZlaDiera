export type ReservationType = {
    id: string;
    date: string;
    status: 'reserved' | 'cancelled' | 'completed' | 'pending_payment';
    price: number;
    team: {
        children: number;
        adults: number;
        students: number;
    };
    paymentDeadline?: string;
}

export type UserProfile = {
    name: string;
    phone: string;
    address: string;
    city: string;
    country: string;
}

