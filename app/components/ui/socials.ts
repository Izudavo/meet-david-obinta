import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaUpwork, FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_LINK = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  ""
)}?text=${encodeURIComponent(
  "Hi David, I’d like to discuss a project with you."
)}`;

export const socials = [
  {
    href: "https://www.linkedin.com/in/david-obinta",
    icon: CiLinkedin,
    label: "LinkedIn",
    color: "text-sky-500",
  },
  {
    href: "https://github.com/Izudavo",
    icon: FaGithub,
    label: "GitHub",
    color: "text-foreground",
  },
  {
    href: "https://www.upwork.com/freelancers/~01c83a8817dbd8d096?mp_source=share",
    icon: FaUpwork,
    label: "Upwork",
    color: "text-green-500",
  },
  {
    href: WHATSAPP_LINK,
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "text-green-500",
  },
];