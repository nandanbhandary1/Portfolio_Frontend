import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactForm = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // simulate delay (optional for realism)
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message: "Form submitted! I will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-white/20 bg-white/10 backdrop-blur-lg hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 backdrop-blur-lg hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 backdrop-blur-lg hover:shadow-2xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-white/90">{personalInfo.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-2xl">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="w-full border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {submitStatus.type === "success" && (
                      <CheckCircle2 size={20} />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
