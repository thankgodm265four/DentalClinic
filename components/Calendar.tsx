import React, { useState, useEffect, useRef } from 'react';

interface CalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  onClose: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect, onClose }) => {
  const [date, setDate] = useState(new Date(selectedDate || new Date()));
  const calendarRef = useRef<HTMLDivElement>(null);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const year = date.getFullYear();
  const month = date.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to the start of the day
    if (newDate < today) return; // Prevent selecting past dates
    
    // Format to YYYY-MM-DD
    const formattedDate = newDate.toISOString().split('T')[0];
    onDateSelect(formattedDate);
  };
  
  const renderDays = () => {
    const days = [];
    // Add blank days for the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-2"></div>);
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize
      
      const isSelected = selectedDate === currentDate.toISOString().split('T')[0];
      const isToday = today.toDateString() === currentDate.toDateString();
      const isPast = currentDate < today;

      let className = "text-center p-2 rounded-full cursor-pointer transition-colors duration-200";
      
      if (isPast) {
        className += " text-gray-400 cursor-not-allowed";
      } else if (isSelected) {
        className += " bg-brand-teal text-white font-bold";
      } else if (isToday) {
        className += " bg-brand-teal-light text-brand-teal-dark";
      } else {
        className += " hover:bg-gray-200";
      }
      
      days.push(
        <div key={day} className={className} onClick={() => handleDateClick(day)}>
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div ref={calendarRef} className="absolute top-full mt-2 w-full max-w-sm bg-white border rounded-lg shadow-lg p-4 z-10">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
        <div className="font-bold text-lg text-gray-800">
          {monthNames[month]} {year}
        </div>
        <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-semibold text-sm text-gray-500">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
