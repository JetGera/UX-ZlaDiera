import React from 'react';
import { Button } from 'react-aria-components';
import '../pages/ProfilPage.css';

export function ReservationCard({
                                    reservation,
                                    onBack,
                                    onChangeDate,
                                    onCancel,
                                    onDownload,
                                    onProceedPayment
                                }) {
    const getStatusColor = () => {
        switch (reservation.status) {
            case 'reserved':
                return "reservationCardReserved";
            case 'cancelled':
                return 'reservationCardCancelled';
            case 'completed':
                return 'reservationCardCompleted';
            case 'pending_payment':
                return 'reservationCardPending';
            default:
                return '';
        }
    };

    const getStatusText = () => {
        switch (reservation.status) {
            case 'reserved':
                return 'Rezervovana';
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

    const renderButtons = () => {
        switch (reservation.status) {
            case 'cancelled':
                return (
                    <>
                        <Button className="onBack" onPress={onBack} variant="secondary">Vratit' sa</Button>
                    </>
                );
            case 'completed':
                return (
                    <>
                        <Button className="onBack" onPress={onBack} variant="secondary">Vratit' sa</Button>
                        {onDownload && <Button className="onDownload" onPress={onDownload} variant="secondary">Stiahnut' podtvrdenku</Button>}
                    </>
                );
            case 'reserved':
                return (
                    <>
                        <Button onPress={onBack} className="onBack" variant="secondary">Vratit' sa</Button>
                        {onDownload && <Button className="onDownload" onPress={onDownload} variant="secondary">Stiahnut' podtvrdenku</Button>}
                        {onChangeDate && <Button onPress={onChangeDate} className="onChangeDate" variant="secondary">Zmena termínu</Button>}
                        {onCancel && <Button onPress={onCancel} className="onCancel" variant="danger">Zrušiť rezerváciu</Button>}
                    </>
                );
            case 'pending_payment':
                return (
                    <>
                        <Button onPress={onBack} className="onBack" variant="secondary">Vratit' sa</Button>
                        {onChangeDate && <Button onPress={onChangeDate} className="onChangeDate" variant="secondary">Zmena termínu</Button>}
                        {onCancel && <Button onPress={onCancel} className="onCancel" variant="danger">Zrušiť rezerváciu</Button>}
                        {onProceedPayment && <Button className="onProceedPayment" onPress={onProceedPayment}>Pokračovať z platbou</Button>}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`${'reservationItem'} ${getStatusColor()}`}>
            <div className='reservationHeader'>
                <span className='reservationDate'>Rezervacia {reservation.date}</span>
                <span className='reservationStatus'>Status: {getStatusText()} </span>
            </div>
            <div className='reservationInfo'>
                <div className='reservationTeam'>
                    <h3>Váš expedičný tím:</h3>
                    <ul>
                        {reservation.team.children > 0 &&
                            <li>{reservation.team.adults}x Deti</li>
                        }
                        {reservation.team.adults > 0 &&
                            <li>{reservation.team.adults}x Dospelí</li>
                        }
                        {reservation.team.students > 0 &&
                            <li>{reservation.team.students}x Študenti</li>
                        }

                        {(reservation.additional.photo === true || reservation.additional.personalReservation)  &&
                            <h3 className="additionalDisplay">Dalšie služby:</h3>
                        }
                        {reservation.additional.photo === true &&
                            <li>Moznost robit’ foto</li>
                        }
                        {reservation.additional.personalReservation === true &&
                            <li>Individualny termin</li>
                        }


                    </ul>
                </div>
                <div className='reservationPriceAndReason'>
                    <span className='reservationPrice'>Celkovo: €{
                        reservation.team.children * 5 +
                        reservation.team.students * 7.5 +
                        reservation.team.adults * 10 +
                        (reservation.additional.photo ? 10 : 0) +
                        (reservation.additional.personalReservation ? 75 : 0)
                    }</span>
                    <span className='statusReason'>
                    {reservation.reason}

                        {reservation.status === 'pending_payment' && (
                            <p>
                            Zaplaťte
                                do {new Date(new Date(reservation.date.split(" ")[0].split(".").reverse().join("-") + "T" + reservation.date.split(" ")[1]).getTime() - 24 * 60 * 60 * 1000).toLocaleString("sk-SK", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }).replace(",", "")}.
                            </p>
                        )}
                    </span>
                </div>

            </div>

            {reservation.status === 'pending_payment' && (
                <div>


                    {reservation.paymentDeadline && (
                        <p>Zaplaťte do {reservation.paymentDeadline}</p>
                    )}
                </div>
            )}
            <div className="reservationDetails">
                {renderButtons()}
            </div>
        </div>
    );
}

