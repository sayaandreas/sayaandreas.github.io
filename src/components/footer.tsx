import { icons } from "./icons";

interface Social {
  id: number;
  network: string;
  username: string;
  url: string;
  resumeId: number;
  createdAt: string;
  updatedAt: string;
}

interface FooterProps {
  creator: string;
  socials: Social[];
}

function Footer({ creator, socials }: FooterProps) {
  return (
    <footer id="footer" className="section footer">
      <ul className="footer-socials">
        {socials.map((social, index) => {
          const icon = icons[social.network];
          return (
            <li key={index}>
              <a
                href={social.url}
                aria-label={social.network}
                target="blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="text-center text-soft">
        Built with Vite. Crafted by {creator}.
      </p>
    </footer>
  );
}

export default Footer;
