import React, { useState } from "react";
import { useAddContactMutation } from "./slices/ContactSlice";

export default function ContactForm() {
    
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [addContact, { isLoading: addContactLoading, error: addContactError }] = useAddContactMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addContact({ name, company, email, phone, message }).unwrap();
            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setMessage("");
            setIsSubmitted(true);
        } catch (err) {
            console.error("Failed to submit the form: ", err);
        }
    };

    return (
        <div id="contactFormDiv">
            <h1>Contact Form</h1>
            
            {isSubmitted ? (
            <p>Thank you for your message. I will get back to you soon.</p>
        ) : (
            <>
            <p>
                Please fill out the form below to contact me.
            </p>
            <form id="contactForm" onSubmit={handleSubmit} >
                <label className="name-label">
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="contactForm-company">
                    Company
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </label>
                <label className="contactForm-email">
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="contactForm-phone">
                    Phone
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className="contactForm-message">
                    Message
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button id="contactFormSubmit" type="submit">Submit</button>
            </form>
            </>
        )}
        </div>
    )
}