"use client";

import React, { useState } from "react";
import { Button } from "@/components/Ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your API call or email service logic here.
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-md">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
      <p className="text-slate-600 text-sm mb-6">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="fullName" className="text-slate-700 font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full border border-slate-300 rounded-md px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#f1170c]"
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-slate-700 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-slate-300 rounded-md px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#f1170c]"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className="text-slate-700 font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Inquiry about Services"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full border border-slate-300 rounded-md px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#f1170c]"
          />
        </div>

        {/* Your Message */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-slate-700 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full border border-slate-300 rounded-md px-4 py-3 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#f1170c] min-h-[120px] resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="blue"
          className="w-full text-white py-6 font-semibold"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
