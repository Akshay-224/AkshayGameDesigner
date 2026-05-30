import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { asset } from "../utils.js";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = ({ target: { name, value }}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
         await emailjs.send(
                'service_ufdae5n',
                'template_20v5rvw',
                {
                    from_name: form.name,
                    to_name: 'Akshay',
                    from_email: form.email,
                    to_email: 'akshayarul007@gmail.com',
                    message: form.message
                },
             'Qm5_MSvsbq8RClqkJ'
                )

            setLoading(false);

         alert('Your message has been sent!')

            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Something went wrong!')
        }

    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex
            items-center justify-center flex-col">
            <img src={asset("/assets/terminal.png")} alt="Terminal background"
            className="absolute inset-0 min-h-screen w-full object-cover"/>
                <div className="contact-container relative z-10 sm:px-12 px-6 pt-12 mt-12">
                    <h3 className="head-text">
                        Let’s Build Something Memorable
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        Open to collaborations, internships, and opportunities focused on game design,
                        gameplay systems, and interactive experiences.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}
                    className="mt-12 flex flex-col space-y-7">
                        <label className='space-y-3'>
                            <span className="field-label">
                                Full Name </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="John Doe"
                                />
                        </label>
                        <label className='space-y-3'>
                            <span className="field-label">
                                Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="field-input"
                                    placeholder="johndoe@gmail.com"
                                />
                        </label>
                        <label className='space-y-3'>
                            <span className="field-label">
                                Your Message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="field-input"
                                    placeholder="Hi, I wanna give you a job..."
                                />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src={asset("/assets/arrow-up.png")} alt="arrow-up"
                            className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
