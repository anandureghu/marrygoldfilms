"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "@/components/input";
import TextArea from "@/components/textarea";
import { SERVICES } from "@/utils/consts";

const BookingForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8 rounded-lg">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        {/* Row 1 */}
        <Input
          label="Name"
          required
          name="name"
          placeholder="Enter your name"
        />

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            required
            name="phone"
            placeholder="Enter your phone number"
          />
          <Input
            label="Email"
            required
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Service Type
            </label>
            <select
              name="service"
              className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2 text-gray-600"
              required
            >
              <option value="">Select service</option>
              {SERVICES.map((service) => (
                <option value={service.title} key={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <Input
            name="date"
            label="Date and Time"
            type="datetime-local"
            placeholder="Date and Time"
          />
        </div>

        <TextArea
          name="message"
          label="Additional Information"
          placeholder="Any notes..."
        />

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`px-8 py-2 rounded-full font-medium text-white transition-all ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            {loading ? "SENDING..." : "SUBMIT →"}
          </button>
        </div>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-600 pt-2">
            ✅ Your booking request was sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 pt-2">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
