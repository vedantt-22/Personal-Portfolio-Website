
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for contacting me. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "johndoe@example.com",
      link: "mailto:johndoe@example.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "New York, NY, USA",
      link: "https://goo.gl/maps/JwYLGBg6MKpPuETc6",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="contact-input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="contact-input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  className="contact-input"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={6}
                  className="contact-input"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-primary"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 bg-[#1877f2]/10 text-[#1877f2] rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 bg-[#1da1f2]/10 text-[#1da1f2] rounded-full flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 bg-[#0077b5]/10 text-[#0077b5] rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 bg-[#171515]/10 text-[#171515] rounded-full flex items-center justify-center hover:bg-[#171515] hover:text-white transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
