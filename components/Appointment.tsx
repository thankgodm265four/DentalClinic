import React, { useState } from 'react';
import { MAIN_SERVICES, OTHER_SERVICES } from '../constants';
import Calendar from './Calendar'; // Import the new Calendar component

const Appointment: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Teeth Whitening',
        date: '',
        time: 'Morning (8am - 12pm)',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State to control calendar visibility

    const allServices = [...MAIN_SERVICES.map(s => s.name), ...OTHER_SERVICES];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
        }
    };

    const handleDateSelect = (date: string) => {
        setFormData(prevState => ({ ...prevState, date }));
        setIsCalendarOpen(false);
    };

    const validateForm = () => {
        const newErrors: { name?: string; phone?: string } = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required.';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\+?[0-9\s-()]{7,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const whatsAppMessage = `
*New Appointment Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}

*Requested Service:* ${formData.service}
*Preferred Date:* ${formData.date || 'Not specified'}
*Preferred Time:* ${formData.time}

*Message:*
${formData.message || 'No message.'}
        `;

        const encodedMessage = encodeURIComponent(whatsAppMessage.trim());
        const whatsAppUrl = `https://wa.me/2348105001567?text=${encodedMessage}`;

        setTimeout(() => {
            window.open(whatsAppUrl, '_blank');
            setIsSubmitting(false);
            setFormData({
                name: '', phone: '', email: '', service: 'Teeth Whitening',
                date: '', time: 'Morning (8am - 12pm)', message: ''
            });
        }, 1000);
    };

    return (
        <section id="appointment" className="py-24 bg-brand-blue-light/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue-dark">Request an Appointment</h2>
                    <p className="text-gray-600 mt-2 text-lg">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            {/* Form fields here */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address (Optional)</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Preferred Service</label>
                                <select name="service" id="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                                    {allServices.map(serviceName => (
                                        <option key={serviceName} value={serviceName}>{serviceName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                <input 
                                    type="text" 
                                    name="date" 
                                    id="date" 
                                    value={formData.date} 
                                    onFocus={() => setIsCalendarOpen(true)}
                                    readOnly 
                                    placeholder="Select a date"
                                    className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue cursor-pointer" 
                                />
                                {isCalendarOpen && (
                                    <Calendar 
                                        selectedDate={formData.date}
                                        onDateSelect={handleDateSelect}
                                        onClose={() => setIsCalendarOpen(false)}
                                    />
                                )}
                            </div>
                             <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                <select name="time" id="time" value={formData.time} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                                    <option>Morning (8am - 12pm)</option>
                                    <option>Afternoon (12pm - 6pm)</option>
                                </select>
                            </div>
                             <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Message (Optional)</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button type="submit" disabled={isSubmitting} className="w-full max-w-xs text-center bg-gradient-to-r from-brand-blue to-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-blue-500 hover:to-brand-blue transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : 'Send Request via WhatsApp'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Appointment;