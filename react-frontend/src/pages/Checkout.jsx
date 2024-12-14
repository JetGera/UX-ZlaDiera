'use client'

import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import './Checkout.css'

const CheckoutPage = () => {
    const [orderData, setOrderData] = useState(null)

    useEffect(() => {
        const storedData = localStorage.getItem('reservationData')
        if (storedData) {
            setOrderData(JSON.parse(storedData))
        }
    }, [])

    const [cardNumber, setCardNumber] = useState('')
    const [expiryMonth, setExpiryMonth] = useState('')
    const [expiryYear, setExpiryYear] = useState('')
    const [cvv, setCvv] = useState('')
    const [secure3d, setSecure3d] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle payment submission (mock)
        console.log('Payment submitted')
        window.location.href = '/payment-success'
    }

    if (!orderData) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="checkout-page">
            <h1>Platba</h1>

            <div className="checkout-content">
                <div className="order-summary">
                    <h2>Vaša skupina:</h2>
                    {orderData.ticketGroups.map((group, index) => (
                        <div key={index} className="summary-row">
                            <span>{group.name}:</span>
                            <span>{group.count}</span>
                        </div>
                    ))}

                    {orderData.additionalServices.length > 0 && (
                        <>
                            <h2>Vaše ďalšie služby:</h2>
                            {orderData.additionalServices.map((service, index) => (
                                <div key={index} className="summary-row">
                                    <span>{service.name}</span>
                                </div>
                            ))}
                        </>
                    )}

                    <div className="summary-row date-time">
                        <span>Datum:</span>
                        <span>{new Date(orderData.date).toLocaleDateString('sk-SK')}</span>
                    </div>
                    <div className="summary-row date-time">
                        <span>Čas:</span>
                        <span>{orderData.time}</span>
                    </div>

                    <div className="summary-row total">
                        <span>Spolu:</span>
                        <span>€{orderData.total.toFixed(2)}</span>
                    </div>

                    <div className="summary-footer">
                        <span>Chcete to zmeniť?</span>
                        <NavLink to="/rezervacia" className="back-link">
                            Vratiť sa
                        </NavLink>
                    </div>
                </div>

                <div className="payment-form">
                    <h2>Zadajte údaje platobnej karty</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-checkout">
                            <label htmlFor="cardNumber">Card number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group-checkout">
                                <label htmlFor="expiryMonth">Expiration date</label>
                                <div className="expiry-inputs">
                                    <input
                                        type="text"
                                        id="expiryMonth"
                                        value={expiryMonth}
                                        onChange={(e) => setExpiryMonth(e.target.value)}
                                        placeholder="MM"
                                        maxLength="2"
                                    />
                                    <input
                                        type="text"
                                        id="expiryYear"
                                        value={expiryYear}
                                        onChange={(e) => setExpiryYear(e.target.value)}
                                        placeholder="YY"
                                        maxLength="2"
                                    />
                                </div>
                            </div>

                            <div className="form-group-checkout">
                                <label htmlFor="cvv">
                                    CVV/CVD
                                    {/*<span className="info-icon">?</span>*/}
                                </label>
                                <input
                                    type="text"
                                    id="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    maxLength="4"
                                />
                            </div>
                        </div>

                        <div className="secure-checkbox">
                            <input
                                type="checkbox"
                                id="secure3d"
                                checked={secure3d}
                                onChange={(e) => setSecure3d(e.target.checked)}
                            />
                            <label htmlFor="secure3d">
                                Uložiť udaje pre budúce platby
                                <span className="info-icon">?</span>
                            </label>
                        </div>


                        <div className="card-logos">
                            <img src="/placeholder.svg?height=30&width=40" alt="American Express" />
                            <img src="/placeholder.svg?height=30&width=40" alt="DX" />
                            <img src="/placeholder.svg?height=30&width=40" alt="Diners Club" />
                            <img src="/placeholder.svg?height=30&width=40" alt="Finnet" />
                            <img src="/placeholder.svg?height=30&width=40" alt="JCB" />
                            <img src="/placeholder.svg?height=30&width=40" alt="Maestro" />
                            <img src="/placeholder.svg?height=30&width=40" alt="Mastercard" />
                            <img src="/placeholder.svg?height=30&width=40" alt="Visa" />
                        </div>

                        <button type="submit" className="pay-button">
                            Zaplatiť €{orderData.total.toFixed(2)}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage

