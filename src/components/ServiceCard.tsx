interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 h-full shadow-lg flex flex-col gap-4">
      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
        {Icon ? <Icon size={20} /> : null}
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>

      <div>
        <button className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm">Learn More</button>
      </div>
    </div>
  );
}
