'use client'

import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import './Payment-result.css'

const PaymentError = () => {
    return (
        <div className="result-page">
            <div className="result-container">
                <div className="icon-container error">
                    <X className="icon" size={120} strokeWidth={3} />
                </div>

                <h1>Platba nebola úspešná</h1>
                <p className="paymentStatusText">
                    Platba sa nepodarila. Skúste to prosím znova
                </p>

                <div className="buttons-container">
                    <NavLink to="/" className="result-button">
                        Prejsť na hlavnú stránku
                    </NavLink>
                    
                    <NavLink to="/rezervacia" className="result-button">
                        Zobraziť rezerváciu
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default PaymentError
