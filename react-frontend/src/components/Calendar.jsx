import { useState } from 'react';
import './Calendar.css';

const CalendarPicker = ({ onSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];
    const daysOfWeek = ['Pon', 'Ut', 'St', 'Št', 'Pia', 'Sob', 'Ne'];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        const days = [];

        // Add days from previous month
        const prevMonthDays = new Date(year, month, 0).getDate();
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push({
                date: new Date(year, month - 1, prevMonthDays - i),
                isCurrentMonth: false
            });
        }

        // Add days from current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                date: new Date(year, month, i),
                isCurrentMonth: true,
                isToday: new Date(year, month, i).toDateString() === new Date().toDateString() // Check if the day is today
            });
        }

        // Add days from next month
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false
            });
        }

        return days;
    };

    const navigateMonth = (direction) => {
        setCurrentDate(new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + (direction === 'next' ? 1 : -1),
            1
        ));
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        if (selectedTime && onSelect) {
            onSelect(date, selectedTime);
        }
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        if (selectedDate && onSelect) {
            onSelect(selectedDate, time);
        }
    };

    const formatDate = (date) => {
        return date.getDate().toString();
    };

    const monthYear = currentDate.toLocaleString('sk-SK', { month: 'long', year: 'numeric' });
    const days = getDaysInMonth(currentDate);

    return (
        <div className="calendar-picker">
            <div className="calendar-container">
                <div className="calendar-header">
                    <button onClick={() => navigateMonth('prev')}>&lt;</button>
                    <h2>{monthYear}</h2>
                    <button onClick={() => navigateMonth('next')}>&gt;</button>
                </div>

                <div className="calendar-grid">
                    {daysOfWeek.map(day => (
                        <div key={day} className="calendar-day-header">
                            {day}
                        </div>
                    ))}

                    {days.map(({ date, isCurrentMonth, isToday }, index) => (
                        <button
                            key={index}
                            className={`calendar-day ${!isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${selectedDate?.toDateString() === date.toDateString() ? 'selected' : ''}`}
                            onClick={() => handleDateSelect(date)}
                        >
                            {formatDate(date)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="time-picker">
                <div className="time-slots">
                    {timeSlots.map(time => (
                        <button
                            key={time}
                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                            onClick={() => handleTimeSelect(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>

                {selectedDate && selectedTime && (
                    <div className="selected-datetime">
                        {selectedDate.getDate()}. {monthYear}, {selectedTime}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendarPicker;
