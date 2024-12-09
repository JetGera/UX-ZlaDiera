import React from "react";
import "./Footer.css";

const LinkList = ({title, items}) => {
    return (
        <div className="LinkList">
            <h5>{title}</h5>

            <div className="list">
                { items.map((item, id) =>
                    <a key={id} href={item.url}>
                       {item.text}
                    </a>
                )}
            </div>
        </div>
    );
};


const Footer = () => {
    const data = [
        {
            title: "Partneri",
            items: [
                { text: "SlimFOX.cz", href: "https://www.slimfox.cz/" },
                { text: "Pedikúra Brno", href: "https://www.pedikura-brno.top/" },
                { text: "Kosmetika Brno", href: "https://cisteni-pleti-ultrazvukem.slimfox.cz/" },
                { text: "Čistenie pleti", href: "https://cisteni-pleti-ultrazvukem.slimfox.cz/" },
                { text: "Netusers.cz", href: "https://www.pedikura-brno.top/" },
                { text: "Titulky.com", href: "https://titulky.com" },
            ]
        },
        {
            title: "Zdroje",
            items: [
                { text: "O nás", href: "https://www.titulky.com/?Napoveda=7" },
                { text: "Pravidlá", href: "https://www.titulky.com/precti-si-zakladni-napovedu-2" },
                { text: "Prémiové funkcie", href: "https://www.titulky.com/precti-si-vip-napovedu-1" },
                { text: "Reklama", href: "https://www.titulky.com/internetova-reklama/" },
            ]
        }
    ];

    return (
        <div className="section Footer">
            { data.map((ll, id) =>
                <LinkList key={id}
                          title={ll.title}
                          items={ll.items}></LinkList>
            )}
        </div>
    );
};

export default Footer;