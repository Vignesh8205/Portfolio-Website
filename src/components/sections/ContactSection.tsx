import { useEffect, useState } from 'react'
import { Section } from '../Section'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser';



export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    setErrors((prev) => ({ ...prev, [id]: '' }))
  }

  const validate = () => {
    let valid = true
    const newErrors = { name: '', email: '', mobile: '', message: '' }
    const spamOrBadWordsRegex = /viagra|free money|http|sex|porn|nude|naked|stupid|idiot|damn|hell|bastard|fool|shit|fuck|asshole|bitch/i;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
      valid = false
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
      valid = false
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits'
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      valid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      valid = false;
    } else if (spamOrBadWordsRegex.test(formData.message)) {
      newErrors.message = 'Message contains suspicious content';
      valid = false;
    }

    setErrors(newErrors)
    return valid
  }


  useEffect(() => {
    emailjs.init("biXMHC6-SltyIHUNb");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form Data:', formData);

      emailjs.send(
        "service_wojpvmv",
        "template_wt7fuc3",
        {
          title: "vignesh",
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        "biXMHC6-SltyIHUNb"
      ).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setFormData({ name: '', email: '', mobile: '', message: '' });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send email. Please try again.");
        }
      );



    }
  }


  return (
    <Section id="contact" title="Get in Touch">
      <div className="max-w-2xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}
