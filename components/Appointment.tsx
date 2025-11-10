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
    
    const inputStyles = "mt-1 block w-full px-4 py-3 bg-bg-primary border border-border-color rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent";
    const labelStyles = "block text-sm font-medium text-text-body mb-1";

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
        <section id="appointment" className="py-24 bg-bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-text-headings">Request an Appointment</h2>
                    <p className="text-text-body mt-2 text-lg">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-bg-primary rounded-xl shadow-2xl border border-border-color p-8 md:p-12">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <label htmlFor="name" className={labelStyles}>Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={inputStyles} />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className={labelStyles}>Phone Number</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className={inputStyles} />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className={labelStyles}>Email Address (Optional)</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputStyles} />
                            </div>
                            <div>
                                <label htmlFor="service" className={labelStyles}>Preferred Service</label>
                                <select name="service" id="service" value={formData.service} onChange={handleChange} className={inputStyles}>
                                    {allServices.map(serviceName => (
                                        <option key={serviceName} value={serviceName}>{serviceName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative">
                                <label htmlFor="date" className={labelStyles}>Preferred Date</label>
                                <input 
                                    type="text" 
                                    name="date" 
                                    id="date" 
                                    value={formData.date} 
                                    onFocus={() => setIsCalendarOpen(true)}
                                    readOnly 
                                    placeholder="Select a date"
                                    className={`${inputStyles} cursor-pointer`} 
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
                                <label htmlFor="time" className={labelStyles}>Preferred Time</label>
                                <select name="time" id="time" value={formData.time} onChange={handleChange} className={inputStyles}>
                                    <option>Morning (8am - 12pm)</option>
                                    <option>Afternoon (12pm - 6pm)</option>
                                </select>
                            </div>
                             <div className="md:col-span-2">
                                <label htmlFor="message" className={labelStyles}>Additional Message (Optional)</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className={inputStyles}></textarea>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button type="submit" disabled={isSubmitting} className="w-full max-w-xs text-center bg-brand-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
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