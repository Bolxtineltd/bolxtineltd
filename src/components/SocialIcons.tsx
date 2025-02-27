import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <Image src={social} alt={social} key={social} width={32} height={32} />
      ))}
    </div>
  );
};

export default SocialIcons;
const socials = [
  "/assets/instagram.svg",
  "/assets/whatsapp.svg",
  "/assets/facebook.svg",
  "/assets/x.svg",
];
