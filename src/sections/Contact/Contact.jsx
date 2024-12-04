import React, { useState } from 'react';
import styles from './ContactStyles.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', formValues.name);
        formData.append('email', formValues.email);
        formData.append('message', formValues.message);
        formData.append('access_key', 'c834bc18-cd32-4341-b82b-165da8fc1964');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log('Success', res);
            // Clear input fields
            setFormValues({
                name: '',
                email: '',
                message: ''
            });
            toast.success("Message sent successfully 🎉");
        } else {
            toast.error("Message sending failed 😢");
        }
    };

    return (
        <section id="contact" className={styles.container}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <h1 className="sectionTitle">Contact</h1>
            <form onSubmit={onSubmit}>
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Message"
                        value={formValues.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <input className="hover btn" type="submit" value="submit" />
            </form>
        </section>
    );
};

export default Contact;
