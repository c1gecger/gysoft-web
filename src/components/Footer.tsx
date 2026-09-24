import "./Footer.css";

const socialLinks = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/szegedivasvari/",
        image: "./img/socialmedia_logos/Instagram.png",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/szeged.vasvaripal",
        image: "./img/socialmedia_logos/Facebook.png",
    },
    {
        name: "Network",
        url: "https://www.vasvari.hu/",
        image: "./img/socialmedia_logos/Network.png",
    },
];

const footerColumns = [
    {
        title: "Use cases",
        items: [
            "UI design",
            "UX design",
            "Wireframing",
            "Diagramming",
            "Brainstorming",
            "Online whiteboard",
            "Team collaboration",
        ],
    },
    {
        title: "Explore",
        items: [
            "Design",
            "Prototyping",
            "Development features",
            "Design systems",
            "Collaboration features",
            "Design process",
            "FigJam",
        ],
    },
    {
        title: "Resources",
        items: [
            "Blog",
            "Best practices",
            "Color",
            "Color wheel",
            "Support",
            "Developers",
            "Resource library",
        ],
    },
];

function Footer() {
    return (
        <footer className="footer" id="kapcsolat">
            <div className="oszlopok"></div>

            <div className="oszlopok">
                <p></p>
                <div className="socialIcons">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            className="socialIcon"
                            href={social.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={social.name}
                        >
                            <img src={social.image} alt={social.name} />
                        </a>
                    ))}
                </div>
            </div>

            {footerColumns.map((column) => (
                <div className="oszlopok" key={column.title}>
                    <h4 className="footerTitle">{column.title}</h4>
                    {column.items.map((item) => (
                        <p className="footerText" key={item}>{item}</p>
                    ))}
                </div>
            ))}

            <div className="oszlopok"></div>
        </footer>
    );
}

export default Footer;

