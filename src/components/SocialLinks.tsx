import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/this.lebo/", icon: <Facebook /> },
    { name: "Twitter", link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwia64O136iHAxWsW0EAHeDeDbwQFnoECCIQAQ&url=https%3A%2F%2Ftwitter.com%2Fthis_lebo&usg=AOvVaw1lC6ZRMYDwJ3wZbe2UKrSF&opi=89978449", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/lebogang-mawaya-184970168/", icon: <Linkedin /> },
    { name: "External", link: "https://github.com/mawayalebo", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
