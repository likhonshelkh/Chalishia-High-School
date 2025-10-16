'use client';
import React, { useEffect, useState } from 'react';

const DateTimeBar: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      };
      setDate(now.toLocaleDateString('bn-BD', options));
      setTime(now.toLocaleTimeString('bn-BD'));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="datetime-section">
      <div className="date">
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <span id="show_date">{date}</span>
      </div>
      <div className="time">
        <i className="fa fa-clock-o" aria-hidden="true"></i>
        <span id="show_time">{time}</span>
      </div>
      <div className="admin">
        <a href="//institute.jessoreboard.gov.bd" target="_blank">
          <i className="fa fa-user" aria-hidden="true"></i> Admin Login
        </a>
      </div>
    </section>
  );
};

export default DateTimeBar;