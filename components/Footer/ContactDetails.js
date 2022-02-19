import { Contact } from '../Contact';

export function ContactDetails() {
  return (
    <div className="w-full bg-primary-dark flex items-start">
      <div className="mt-20 py-12">
        <h3 className="font-semibold mb-10">Contact us</h3>
        <Contact
          icon="pe-7s-map-marker"
          contactType="Head Office"
          contactDetails="123 Acacia Avenue, New York, USA, 20192"
        />
        <Contact
          icon="pe-7s-mail"
          contactType="Email Us"
          contactDetails="support@gmail.com"
        />
        <Contact
          icon="pe-7s-call"
          contactType="Call Us"
          contactDetails="+87986451666"
        />
      </div>
    </div>
  );
}
