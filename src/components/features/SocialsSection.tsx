import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { SocialCard } from "./SocialCard";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com"
  }
];

export const SocialsSection = () => {
  return (
    <section className="w-full flex flex-col gap-[10px]">
      {socialLinks.map((social) => (
        <SocialCard
          key={social.name}
          name={social.name}
          icon={social.icon}
          href={social.href}
        />
      ))}
    </section>
  );
};