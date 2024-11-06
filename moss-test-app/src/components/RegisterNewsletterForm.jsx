import { useState } from "react";
import React from "react";

export default function RegisterNewsletterForm(){
    const [formData, setFormData] = useState(
        {firstName: "", lastName: "", email: ""}
    )

    const [formValidation, setFormValidation] = useState(false);

    function validateForm() {
        const isValid = formData.firstName.length > 0 &&
                        formData.lastName.length > 0 &&
                        formData.email.length > 0;
        setFormValidation(isValid); 
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

        validateForm();
    }

    console.log()

    function handleSubmit(event){
        event.preventDefault()
        // submitToApi(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Tilmeld dig vores nyhedsbrev!
            <input 
                type="text"
                placeholder="Fornavn"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            </label>
            <input 
                type="text"
                placeholder="Efternavn"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <button
                type="sumbit"
                disabled={!formValidation}
            >
                Tilmeld nyhedsbrev
            </button>
        </form>
    )

}