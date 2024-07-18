import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import ReCaptcha from 'react-google-recaptcha'

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    const formData = {
      ...form, 
      _subject: 'Portfolio form submission',
      _template: 'table',
      _captcha: 'false'
    }

    const response = await fetch('https://formsubmit.co/7cfa71977f94ebb341e4278d8eb0eb6c', {
        method: 'POST',
        body: formData
    })

    if (response.ok) {
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false)
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          className="mt-12 gap-4 flex flex-col"
          onSubmit={handleSubmit}
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="bg-tertiary p-4 text-white border font-medium"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <ReCaptcha 
            sitekey='6LfvVxMqAAAAABlHaVw74lopQc2sEIRV2fn82Der'
            onChange={(e) => setCaptchaValue(e)}
          />
          <button
            type='submit'
            className={`${captchaValue ? 'bg-tertiary' : 'bg-gray-600 hover:border-transparent' }  py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary`}
            disabled={!captchaValue}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");