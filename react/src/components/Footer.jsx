import React from 'react';

const Footer = (props) => {
    return (
        <footer className={props.className}>
            <div><strong>{props.environment}</strong></div>
        </footer>
    )
}
export default Footer;