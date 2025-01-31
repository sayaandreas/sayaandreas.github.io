import { ChevronUpIcon } from "lucide-react";
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

interface SideLeftProps {
  socials: Social[];
}

export function SideLeft({ socials }: SideLeftProps) {
  return (
    <aside className="aside left">
      <ul>
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
    </aside>
  );
}

export function SideRight() {
  function clickHandler() {
    window.scrollTo(0, 0);
  }
  return (
    <aside className="aside right">
      <button className="btn btn--ic" onClick={clickHandler}>
        <ChevronUpIcon
          absoluteStrokeWidth={true}
          width="40px"
          height="40px"
          strokeWidth={1}
        />
      </button>
    </aside>
  );
}
