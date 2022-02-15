import { Facebook, Twitter, Instagram, Youtube } from './Socials';

export function SocialIcons() {
  return (
    <div className="w-full flex justify-between">
      <Facebook />
      <Twitter />
      <Instagram />
      <Youtube />
    </div>
  );
}
