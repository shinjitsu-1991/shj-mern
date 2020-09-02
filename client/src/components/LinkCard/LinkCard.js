import React from "react";

const LinkCard = ({link}) => {
    return (
        <>
            <h2>Link</h2>
            <p>Short link: <a target="_blank" rel="noopener noreferrer" href={link.to}>{link.to}</a></p>
            <p>Your link: <a target="_blank" rel="noopener noreferrer" href={link.from}>{link.from}</a></p>
            <p>Number of clicks on the link: <strong>{link.clicks}</strong></p>
            <p>Date of create: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    );
}

export default LinkCard;