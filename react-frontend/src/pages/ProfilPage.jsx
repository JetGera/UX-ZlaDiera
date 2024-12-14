'use client';

import React, { useState } from 'react';
import { Button } from 'react-aria-components';
import { ReservationCard } from '../components/ReservationCard';
import { ReservationList } from '../components/ReservationList';
import './ProfilPage.css';
import {Link} from "react-router-dom";

const MOCK_RESERVATIONS = [
  {
    id: '1',
    date: '14.10.2024 13:00',
    status: 'reserved',
    reason: "Rezervácia bola zaplatena.\n" +
        "Tešíme sa na vás v našej jaskyni!",
    team: {
      children: 3,
      adults: 5,
      students: 0
    },
    additional: {
      photo: true,
      personalReservation: true
    }
  },
  {
    id: '2',
    date: '14.10.2024 11:30',
    status: 'cancelled',
    reason: "Rezervácia bola zrušená \nz jedného z dôvodov:\n\n" +
        "Nezaplatili ste za ňu včas.\n " +
        "Termín bol zmenený na iný termín\n" +
        "Rezerváciu ste zrušili vy",
    team: {
      children: 0,
      adults: 1,
      students: 12
    },
    additional: {
      photo: false,
      personalReservation: false
    }
  },
  {
    id: '3',
    date: '28.04.2024 13:00',
    status: 'pending_payment',
    reason: "Rezervácia nebola uhradená. Ak chcete dokončiť rezerváciu, zaplaťte prosím.",
    team: {
      children: 3,
      adults: 6,
      students: 1
    },
    additional: {
      photo: false,
      personalReservation: true
    }
  },
  {
    id: '4',
    date: '2.03.2024 14:30',
    status: 'completed',
    reason: "Rezervácia termínu už uplynula",
    team: {
      children: 0,
      adults: 0,
      students: 2
    },
    additional: {
      photo: true,
      personalReservation: false
    }
  },
  {
    id: '5',
    date: '14.02.2024 13:00',
    status: 'completed',
    reason: "Rezervácia termínu už uplynula",
    team: {
      children: 11,
      adults: 2,
      students: 0
    },
    additional: {
      photo: true,
      personalReservation: true
    }
  },
  {
    id: '6',
    date: '22.01.2024 16:00',
    status: 'completed',
    reason: "Rezervácia termínu už uplynula",
    team: {
      children: 8,
      adults: 4,
      students: 2
    },
    additional: {
      photo: false,
      personalReservation: false
    }
  },
  {
    id: '7',
    date: '7.10.2023 10:00',
    status: 'cancelled',
    reason: "Rezervácia bola zrušená z jedného z dôvodov:\n" +
        "Nezaplatili ste za ňu včas.\n" +
        "Termín bol zmenený na iný termín\n" +
        "Rezerváciu ste zrušili vy",
    team: {
      children: 3,
      adults: 5,
      students: 3
    },
    additional: {
      photo: false,
      personalReservation: false
    }
  },
  {
    id: '8',
    date: '14.04.2023 14:30',
    status: 'completed',
    reason: "Rezervácia termínu už uplynula",
    team: {
      children: 1,
      adults: 1,
      students: 1
    },
    additional: {
      photo: true,
      personalReservation: false
    }
  },
  {
    id: '9',
    date: '01.01.2023 13:00',
    status: 'completed',
    reason: "Rezervácia termínu už uplynula",
    team: {
      children: 5,
      adults: 0,
      students: 3
    },
    additional: {
      photo: true,
      personalReservation: false
    }
  }
];

const MOCK_PROFILE = {
  name: 'Maksym Streltsov',
  phone: '+421 XXX XXX XX',
  address: 'ul. Abcd, 123',
  city: 'Kosice',
  country: 'Slovensko'
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [editorCode, setEditorCode] = useState('');

  const handleBack = () => {
    setSelectedReservation(null);
  };

  const handleViewDetails = (id) => {
    setSelectedReservation(id);
  };

  return (
      <div className="container">
        <div className="content">
          <Link to="/login" className="toRight">
            <Button className="odhlasit_sa" onPress={() => console.log('Logout')}>
              <svg width="15" height="15" className="odhlasit_sa-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                   xlinkHref="http://www.w3.org/1999/xlink">
                <rect width="15" height="15" fill="url(#pattern0_2001_6623)"/>
                <defs>
                  <pattern id="pattern0_2001_6623" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_2001_6623" transform="scale(0.00195312)"/>
                  </pattern>
                  <image id="image0_2001_6623" width="512" height="512"
                         xlinkHref="data:image/png;base64,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"/>
                </defs>
              </svg>
              Odhlásiť sa</Button>
          </Link>
          <div className="header">
            <h1 className="title">{MOCK_PROFILE.name}</h1>
          </div>
          <div className="layout">
            {/* Sidebar */}
            <div className="sidebar">
              <Button
                  onPress={() => setActiveTab('personal')}
                  className={`$"sidebarButton" ${activeTab === 'personal' ? "sidebarButtonActive" : 'sidebarButton'}`}
              >
                Osobne udaje
              </Button>
              <Button
                  onPress={() => setActiveTab('history')}
                  className={`$"sidebarButton" ${activeTab === 'history' ? "sidebarButtonActive" : 'sidebarButton'}`}
              >
                Historia rezervacii
              </Button>

              <Button
                  onPress={() => setActiveTab('none1')}
                  className={`$"sidebarButton" ${activeTab === 'none1' ? 'sidebarButtonActive' : 'sidebarButton'}`}
              >
                ???
              </Button>
              <Button
                  onPress={() => setActiveTab('none2')}
                  className={`$"sidebarButton" ${activeTab === 'none2' ? 'sidebarButtonActive' : 'sidebarButton'}`}
              >
                ???
              </Button>
              <Button
                  onPress={() => setActiveTab('none3')}
                  className={`$"sidebarButton" ${activeTab === 'none3' ? 'sidebarButtonActive' : 'sidebarButton'}`}
              >
                ???
              </Button>



              <Button
                  onPress={() => setActiveTab('editor')}
                  className={`$"sidebarButton" ${activeTab === 'editor' ? 'sidebarButtonActive' : 'sidebarButton'}`}
              >
                Status redaktora
              </Button>
            </div>

            {/* Main Content */}
            <div className='mainContent'>
              {activeTab === 'personal' && (
                  <div className='personalInfo'>
                    {Object.entries(MOCK_PROFILE).map(([key, value]) => (
                        <div key={key} className='infoRow'>
                          <span className='infoLabel'>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                          <span>{value}</span>
                          <Button onPress={() => console.log(`Change ${key}`)} className='changeButton'>
                            zmeniť
                          </Button>
                        </div>
                    ))}
                  </div>
              )}

              {activeTab === 'history' && (
                  <div>
                    {selectedReservation ? (
                        <ReservationCard
                            reservation={MOCK_RESERVATIONS.find(r => r.id === selectedReservation)}
                            onBack={handleBack}
                            onChangeDate={() => console.log('change date')}
                            onCancel={() => console.log('cancel')}
                            onDownload={() => console.log('download')}
                            onProceedPayment={() => console.log('proceed to payment')}
                        />
                    ) : (
                        <ReservationList
                            reservations={MOCK_RESERVATIONS}
                            onViewDetails={handleViewDetails}
                        />
                    )}
                  </div>
              )}

              {activeTab === 'editor' && (
                  <div className='editorStatus'>
                    <h2>Vas status je Redaktor</h2>
                    <div>
                      <label htmlFor="editorCode">Vas kod Redaktora:</label>
                      <div className='editorCodeInput'>
                        <input
                            type="password"
                            id="editorCode"
                            value={editorCode}
                            onChange={(e) => setEditorCode(e.target.value)}
                            placeholder="*** *** *** *** *** ***"
                        />
                        <Button onPress={() => console.log('Show/hide code')}>👁</Button>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}
