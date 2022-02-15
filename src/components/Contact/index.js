export function Contact({ icon, contactType, contactDetails }) {
  return (
    <div className="flex">
      <div className="mr-4">{icon}</div>
      <div className="details">
        <p className="font-semibold text-white text-lg">{contactType}</p>
        <p className="whitespace-pre-wrap">{contactDetails}</p>
      </div>
    </div>
  );
}
