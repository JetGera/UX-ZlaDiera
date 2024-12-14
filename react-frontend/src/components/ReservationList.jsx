'use client';

import { Button } from "react-aria-components";

export function ReservationList({ reservations, onViewDetails }) {
    const getStatusText = (status) => {
        switch (status) {
            case 'reserved':
                return 'Rezervovaná';
            case 'cancelled':
                return 'Zrušená';
            case 'completed':
                return 'Dokončená';
            case 'pending_payment':
                return 'Čakanie na platbu';
            default:
                return '';
        }
    };

    return (
        <div className="reservation-history-list">
            {reservations.map((reservation) => (
                <Button
                    key={reservation.id}
                    variant="ghost"
                    data-status={reservation.status}
                    className="reservation-button"
                    onClick={() => onViewDetails(reservation.id)}
                >
                    <div className="reservation-info">
                        <span>{reservation.date}</span>
                        <span className="reservationCardStatus">
                            Status: {getStatusText(reservation.status)}
                        </span>
                        <span className="rezervacia-viac">viac</span>
                    </div>
                </Button>
            ))}
        </div>
    );
}
