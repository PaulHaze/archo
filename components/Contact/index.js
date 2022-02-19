export function Contact({ icon, contactType, contactDetails }) {
  return (
    <div className="flex my-6">
      <div className={`text-4xl min-w-[80px] text-stone-500 ${icon} `} />
      <div className="details">
        <p className="font-semibold text-white/90 text-lg">{contactType}</p>
        <p className="">{contactDetails}</p>
      </div>
    </div>
  );
}
