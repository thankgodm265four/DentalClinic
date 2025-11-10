import React, { useState } from 'react';

// FIX: Use React.FC and a props interface to correctly type the StarIcon component.
// This resolves a TypeScript error where the special 'key' prop was not recognized when mapping over an array.
interface StarIconProps {
    filled: boolean;
}

// Star Icon for ratings
const StarIcon: React.FC<StarIconProps> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// FIX: Aligned Rating component with project's style by defining props and using React.FC.
interface RatingProps {
    score: string;
    text: string;
}

// Rating Component
const Rating: React.FC<RatingProps> = ({ score, text }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-text-headings">{score}</p>
        <div className="flex justify-center my-1">
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.round(parseFloat(score))} />)}
        </div>
        <p className="text-text-body">{text}</p>
    </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const inputStyles = "mt-1 block w-full px-4 py-3 bg-white border border-border-color rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent text-text-body";
    const labelStyles = "block text-sm font-medium text-text-headings mb-1";
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.message) newErrors.message = "Message is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        
        setIsSubmitting(true);
        
        const whatsAppMessage = `
*New Contact Form Message*

*Name:* ${formData.firstName} ${formData.lastName || ''}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}

*Message:*
${formData.message}
        `;

        const encodedMessage = encodeURIComponent(whatsAppMessage.trim());
        const whatsAppUrl = `https://wa.me/2348105001567?text=${encodedMessage}`;
        
        setTimeout(() => {
            window.open(whatsAppUrl, '_blank');
            setIsSubmitting(false);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <section id="contact">
            {/* Header Section */}
            <div className="bg-brand-accent-light py-20 md:py-28 text-center relative overflow-hidden">
                <img src="https://source.unsplash.com/1600x900/?dental,clinic,blur" alt="Dental clinic background" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-brand-accent opacity-80"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">Contact Us</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-24 bg-bg-primary">
                <div className="container mx-auto px-6">
                    {/* Social Proof Section */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-text-headings mb-4">Trusted by Our Wonderful Patients</h2>
                        <p className="text-lg text-text-body">We are proud of the feedback we receive and strive for excellence in every procedure.</p>
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <Rating score="4.9" text="Patient Satisfaction" />
                            <Rating score="4.8" text="Quality of Care" />
                            <Rating score="4.7" text="Overall Experience" />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="max-w-4xl mx-auto bg-bg-secondary rounded-xl shadow-lg border border-border-color p-8 md:p-12">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                <div>
                                    <label htmlFor="firstName" className={labelStyles}>First Name</label>
                                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className={inputStyles} placeholder="Enter your first name" />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className={labelStyles}>Last Name</label>
                                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className={inputStyles} placeholder="Enter your last name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelStyles}>Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputStyles} placeholder="Enter your email" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className={labelStyles}>Phone number</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className={inputStyles} placeholder="Enter your phone number" />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className={labelStyles}>Message</label>
                                    <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className={inputStyles} placeholder="Type your message here"></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Sending...' : 'Message Now'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;