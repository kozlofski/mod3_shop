import React from 'react'
import { ApplePay, GooglePay, MasterCard, PayPal, Visa } from '../icons/icons'
import Badge from '../badge/Badge'
import Logo from '../logo/Logo'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper container">
                <div className="left-footer-column">
                    <Logo />
                    <Copyright />
                    <PaymentServices />
                </div>
                <FooterLinks />
            </div>
        </div>
    )
}

export default Footer

const Copyright = () => {
    return (
        <div className="footer-copyright">
            <span>&copy; DevStockHub<br />All rights reserved.</span>
        </div>
    )
}

const PaymentServices = () => {
    const services = {
        visa: <Visa />,
        masterCard: <MasterCard />,
        payPal: <PayPal />,
        applePay: <ApplePay />,
        googlePay: <GooglePay />
    }

    return (
        <ul className="payment-services-bar">
            {Object.entries(services).map(([vendor, svg]) => (
                <li key={vendor}>
                    <Badge className="badge badge-payment">
                        {svg}
                    </Badge>
                </li>
            ))}
        </ul>
    )
}
const FooterLinks = () => {
    const links = {
        Company: ["About Us", "Contact", "Partner"],
        Social: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
        FAQ: ["Account", "Deliveries", "Orders", "Payments"],
        Resources: ["E-books", "Tutorials", "Course", "Blog"]
    }

    return (
        <>
            {Object.entries(links).map(([category, linksArray]) => (
                <div className="footer-link-column" key={category}>
                    <h3 className="links-column-header">{category}</h3>
                    <ul className="footer-link-list">
                        {linksArray.map((link, idx) => (
                            <li key={idx} className="footer-link">{link}</li>
                        ))}
                    </ul>
                </ div>
            ))}
        </>
    )
}