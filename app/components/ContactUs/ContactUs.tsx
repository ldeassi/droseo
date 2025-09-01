'use client';
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Message sent!');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        alert('Failed to send message: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Failed to send message: ' + error);
    }
  };

  return (
    <div id="contact" className="w-full flex justify-center py-12 bg-gray-50">
      <div className="w-full mx-auto max-w-2xl lg:max-w-7xl bg-white rounded-3xl shadow-lg p-8 border border-[#d1d5db]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
          <div className="p-4 flex flex-col justify-center w-full">
            <h2 className="text-3xl text-navyblue font-bold text-center mb-6 text-gray-800">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="flex-1 px-4 py-2 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-0 focus:border-[#9ca3af] w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="flex-1 px-4 py-2 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-0 focus:border-[#9ca3af] w-full"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-0 focus:border-[#9ca3af]"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-4 py-2 border border-[#d1d5db] rounded-lg focus:outline-none focus:ring-0 focus:border-[#9ca3af] min-h-[120px]"
                required
              />
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="bg-[#2563eb] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#1d4ed8] w-fit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
