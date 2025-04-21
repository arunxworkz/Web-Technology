import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-8">How to Contact</h2>
        
        <div className="text-white mb-8">
          <p className="mb-2">Email: arunbelavadi30@gmail.com</p>
          <p>Phone: 7483079907</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white mb-2">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">Your Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold
              hover:bg-opacity-90 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}