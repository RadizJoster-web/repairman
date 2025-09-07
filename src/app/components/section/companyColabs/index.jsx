import LogoLoop from "./LogoLoop";

import {
  SiGoogle,
  SiAmazon,
  SiNetflix,
  SiTesla,
  SiMeta,
  SiApple,
  SiSpotify,
  SiGithub,
  SiOpenai,
} from "react-icons/si";

const companyLogos = [
  { node: <SiGoogle />, title: "Google", href: "https://www.google.com" },
  { node: <SiAmazon />, title: "Amazon", href: "https://www.amazon.com" },
  { node: <SiNetflix />, title: "Netflix", href: "https://www.netflix.com" },
  { node: <SiTesla />, title: "Tesla", href: "https://www.tesla.com" },
  { node: <SiMeta />, title: "Meta", href: "https://about.meta.com" },
  { node: <SiApple />, title: "Apple", href: "https://www.apple.com" },
  { node: <SiSpotify />, title: "Spotify", href: "https://www.spotify.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
];

export default function CompanyColabs() {
  return (
    <div className="w-full h-[200px] relative flex justify-center items-center bg-white">
      <LogoLoop
        logos={companyLogos}
        speed={120}
        direction="right"
        logoHeight={60}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="white"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
