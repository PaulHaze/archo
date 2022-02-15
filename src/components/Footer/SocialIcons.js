import { Facebook, Twitter, Instagram, Youtube } from './Socials';

export function SocialIcons() {
  return (
    <div className="w-full mt-20 pt-12">
      <h3 className="font-semibold mb-10">Connect with us</h3>
      <div className="flex justify-between lg:grid lg:grid-cols-2 ">
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
    </div>
  );
}
