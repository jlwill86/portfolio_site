import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddContactMutation } from "./slices/ContactSlice";

export default function ContactForm() {
    
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [addContact, { isLoading: addContactLoading, error: addContactError }] = useAddContactMutation();

    return (
        <div>
            <h1>Contact Form</h1>
            <form id="contactForm" onSubmit={addContact} >
                <label className="name-label">
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="company-label">
                    Company
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </label>
                <label className="email-label">
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="phone-label">
                    Phone
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className="message-label">
                    Message
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}