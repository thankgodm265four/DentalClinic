import React, { useState } from 'react';
import Calendar from './Calendar';
import { MAIN_SERVICES, OTHER_SERVICES_DETAILED } from '../constants';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Teeth Whitening',
    date: '',
    time: '09:00',
    message: '',
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: string) => {
    setFormData(prev => ({ ...prev, date }));
    setIsCalendarOpen(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert(`Appointment requested for ${formData.name} on ${formData.date} at ${formData.time}.`);
    console.log(formData);
    // Reset form
    setFormData({
      name: '', email: '', phone: '', service: 'Teeth Whitening', date: '', time: '09:00', message: '',
    });
  };

  const allServices = [...MAIN_SERVICES, ...OTHER_SERVICES_DETAILED];

  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Book an Appointment</h2>
          <p className="text-text-body mt-2 text-lg">Schedule your visit with us today. It's quick and easy.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-bg-primary p-8 rounded-lg shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border border-gray-200 rounded-md" required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full p-3 border border-gray-200 rounded-md" required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border border-gray-200 rounded-md" required />
              <select name="service" value={formData.service} onChange={handleInputChange} className="w-full p-3 border border-gray-200 rounded-md bg-white">
                {allServices.map(service => <option key={service.name}>{service.name}</option>)}
                <option>Other</option>
              </select>
              <div className="relative">
                <input
                    type="text"
                    name="date"
                    placeholder="Select Date"
                    value={formData.date}
                    onFocus={() => setIsCalendarOpen(true)}
                    readOnly
                    className="w-full p-3 border border-gray-200 rounded-md bg-white cursor-pointer"
                    required
                />
                {isCalendarOpen && (
                    <Calendar 
                        selectedDate={formData.date}
                        onDateSelect={handleDateSelect} 
                        onClose={() => setIsCalendarOpen(false)}
                    />
                )}
              </div>
               <select name="time" value={formData.time} onChange={handleInputChange} className="w-full p-3 border border-gray-200 rounded-md bg-white">
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
              </select>
            </div>
            <textarea name="message" placeholder="Additional Message (optional)" value={formData.message} onChange={handleInputChange} rows={4} className="w-full p-3 border border-gray-200 rounded-md mt-6"></textarea>
            <button type="submit" className="w-full bg-brand-accent text-white py-3 rounded-md mt-6 font-semibold hover:bg-opacity-90 transition-colors">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;