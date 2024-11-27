import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceId = 'service_1vxdwom'; // Replace with your EmailJS Service ID
    const templateId = 'template_d1jjeah'; // Replace with your EmailJS Template ID
    const publicKey = '3qNl3eiJsaxBw2urD'; // Replace with your Public Key

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        setStatus('Message sent successfully!');
        e.target.reset(); // Reset the form fields
      })
      .catch(() => {
        setStatus('Failed to send the message. Please try again.');
      });
  };

  return (
    <form className="contact-form needs-validation" onSubmit={handleSubmit}>
      <div className="messages">
        {status && (
          <p className={`alert ${status.includes('success') ? 'alert-success' : 'alert-danger'}`}>
            {status}
          </p>
        )}
      </div>
      <div className="row gx-4">
        {/* Full Name Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4">
            <input required type="text" name="name" id="form_name" placeholder="Jane Doe" className="form-control" />
            <label htmlFor="form_name">Full Name *</label>
          </div>
        </div>

        {/* Email Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_email">Email *</label>
          </div>
        </div>

        {/* Phone Number Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4">
            <input
              required
              type="tel"
              name="phone"
              id="form_phone"
              className="form-control"
              placeholder="123-456-7890"
            />
            <label htmlFor="form_phone">Phone Number *</label>
          </div>
        </div>

        {/* Message Field */}
        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
            />
            <label htmlFor="form_message">Message *</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <input type="submit" value="Send message" className="btn btn-primary rounded-pill btn-send mb-3" />
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
