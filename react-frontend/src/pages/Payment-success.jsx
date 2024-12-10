'use client'

import { NavLink } from 'react-router-dom'
import { Check } from 'lucide-react'
import './Payment-result.css'

const PaymentSuccess = () => {
    const handleDownloadConfirmation = () => {
        // In a real application, this would generate and download a PDF confirmation
        console.log('Downloading confirmation...')
    }

    return (
        <div className="result-page">
            <div className="result-container">
                <div className="icon-container success">
                    <Check className="icon" size={120} strokeWidth={3} />
                </div>

                <h1>Platba prebehla úspešne</h1>
                <p className="paymentStatusText">
                    Ďakujeme vám za rezerváciu a tešíme sa na vás v našej jaskyni!
                </p>

                <div className="buttons-container">
                    <NavLink to="/" className="result-button">
                        Prejsť na hlavnú stránku
                    </NavLink>
                    
                    <button 
                        onClick={handleDownloadConfirmation}
                        className="result-button"
                    >
                        Stiahnut' podtvrdenku
                    </button>
                    
                    <NavLink to="/rezervacia" className="result-button">
                        Zobraziť rezerváciu
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess

