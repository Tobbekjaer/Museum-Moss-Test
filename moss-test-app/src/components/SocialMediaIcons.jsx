import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

export default function SocialMediaIcons() {
    return (
        <div className="social-media-icons">
            <h2>Følg med på de sociale medier:</h2>
            <div className="icons">
                <a
                    href="https://www.facebook.com/profile.php?id=100047369362601" // Replace with your Facebook page URL
                    target="_blank" // Opens link in a new tab
                    rel="noopener noreferrer" // Security best practice
                    aria-label="Facebook" // Accessibility label
                >
                    <FaFacebook size={40} style={{ margin: '0 10px' }} /> {/* Facebook Icon */}
                </a>
                <a
                    href="https://www.instagram.com/museum_moss/" // Replace with your Instagram page URL
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram" // Accessibility label
                >
                    <FaInstagram size={40} style={{ margin: '0 10px' }} /> {/* Instagram Icon */}
                </a>
            </div>
        </div>
    )
}