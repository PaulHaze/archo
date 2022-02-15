import { Contact } from '../Contact';

export function ContactDetails() {
  return (
    <div className="w-full min-h-[200px] bg-primary-dark">
      <div className="mt-20 pt-24 pl-8">
        <h5 className="font-semibold">Contact us</h5>
        <Contact
          icon="map"
          contactType="Head Office"
          contactDetails="123 Acacia Avenue, New York, USA, 20192"
        />
        <Contact icon="email" contactType="Email Us" contactDetails="" />
      </div>
    </div>
  );
}
