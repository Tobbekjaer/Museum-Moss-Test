import React from 'react'
import RegisterNewsletterForm from './RegisterNewsletterForm'
import { NavLink } from 'react-router-dom'
import SocialMediaIcons from './SocialMediaIcons'

export default function Footer() {

    return (
        <>
        <h1>Footer</h1>
        <SocialMediaIcons />
        <RegisterNewsletterForm />
        </>
    )

}