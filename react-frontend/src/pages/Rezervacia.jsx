'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import CalendarPicker from '../components/Calendar'
import './Rezervacia.css'

const RezervaciaPage = () => {
    const [ticketGroups, setTicketGroups] = useState([
        { name: 'Dospelí', price: 10, count: 0 },
        { name: 'Dieťa', price: 5, count: 0 },
        { name: 'Seniori / študenti', price: 7.5, count: 0 }
    ])

    const [additionalServices, setAdditionalServices] = useState([
        { name: 'Možnosť robiť foto', price: 10, selected: false },
        { name: 'Termín len pre vás', price: 75, selected: false },
        { name: 'XXXXXXXX', price: 20, selected: false },
        { name: 'XXXXXXXX', price: 20, selected: false }
    ])

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)

    const handleCountChange = (index, increment) => {
        setTicketGroups(groups =>
            groups.map((group, i) => {
                if (i === index) {
                    return {
                        ...group,
                        count: increment ? group.count + 1 : Math.max(0, group.count - 1)
                    }
                }
                return group
            })
        )
    }

    const toggleService = index => {
        setAdditionalServices(services =>
            services.map((service, i) => {
                if (i === index) {
                    return { ...service, selected: !service.selected }
                }
                return service
            })
        )
    }

    const calculateTotal = () => {
        const ticketsTotal = ticketGroups.reduce(
            (sum, group) => sum + group.price * group.count,
            0
        )
        const servicesTotal = additionalServices.reduce(
            (sum, service) => sum + (service.selected ? service.price : 0),
            0
        )
        return ticketsTotal + servicesTotal
    }

    const isProceedEnabled = () => {
        return calculateTotal() > 0 && selectedDate && selectedTime
    }

    const handleProceed = () => {
        const reservationData = {
            ticketGroups,
            additionalServices: additionalServices.filter(service => service.selected),
            date: selectedDate,
            time: selectedTime,
            total: calculateTotal()
        }

        // Store the reservation data in localStorage
        localStorage.setItem('reservationData', JSON.stringify(reservationData))
    }

    return (
        <div className="reservation-page">
            <h1>Rezervácia vstupu</h1>

            <div className="reservation-content">
                <div className="reservation-form">
                    <section className="ticket-groups">
                        <h2>Vytvorte skupinu:</h2>
                        {ticketGroups.map((group, index) => (
                            <div key={group.name} className="number-input-group">
                                <div className="group-label">
                                    <span>{group.name}</span>
                                    <span>€ {group.price}</span>
                                </div>
                                <div className="number-input">
                                    <button
                                        onClick={() => handleCountChange(index, false)}
                                        className="number-button"
                                    >
                                        <Minus className="icon"/>
                                    </button>
                                    <span className="number-display">{group.count}</span>
                                    <button
                                        onClick={() => handleCountChange(index, true)}
                                        className="number-button"
                                    >
                                        <Plus className="icon"/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="additional-services">
                        <h2>Ďalšie služby:</h2>
                        <div className="services-grid">
                            {additionalServices.map((service, index) => (
                                <button
                                    key={service.name}
                                    className={`service-button ${service.selected ? 'selected' : ''}`}
                                    onClick={() => toggleService(index)}
                                >
                                    {service.name}
                                    <span className="service-price">€ {service.price}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    <div className="total-section">
                        <NavLink
                            to={isProceedEnabled() ? "/checkout" : "#"}
                            className={`proceed-button ${isProceedEnabled() ? '' : 'disabled'}`}
                            style={{
                                pointerEvents: isProceedEnabled() ? "auto" : "none",
                                opacity: isProceedEnabled() ? 1 : 0.5,
                            }}
                            onClick={(e) => {
                                if (isProceedEnabled()) {
                                    handleProceed()
                                } else {
                                    e.preventDefault()
                                }
                            }}
                        >
                            Pokračovať z platbou
                        </NavLink>
                        <div className="total-amount">
                            <span>Suma:</span>
                            <span>€{calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="calendar-section">
                    <h2>Vyberte si termín:</h2>
                    <CalendarPicker
                        onSelect={(date, time) => {
                            setSelectedDate(date)
                            setSelectedTime(time)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default RezervaciaPage

