import React from 'react';

const MapEmbed: React.FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56414.502709456865!2d37.60998234363543!3d55.77068016908908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a18e09c6dbf%3A0xdc4ca0f84294ad6a!2z0JHQu9Cw0LPQvtGC0LLQvtGA0LjRgtC10LvRjNC90YvQuSDQpNC-0L3QtCDQodGC0LDRgNC-0YHRgtGMINCSINCg0LDQtNC-0YHRgtGM!5e0!3m2!1sru!2sru!4v1730012385126!5m2!1sru!2sru"
            width="100%"
            height="913"
            padding-right="36"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default MapEmbed;