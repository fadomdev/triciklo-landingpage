import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const WhatsAppButton = () => {
    return (
        <div >
            <a href="https://wa.me/+56988271469" className="whatsapp-button">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>

    );
};

export default WhatsAppButton;