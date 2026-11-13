const stats = [
  { value: "5", label: "Editing tools" },
  { value: "3", label: "Output aspect ratios" },
  { value: "20", label: "Free credits on sign-up" },
  { value: "Cloudinary", label: "Image processing" },
];

export default function StatsStrip() {
  return (
    <section className="border-t border-border">
      <div className="container py-12">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[14px] bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-canvas p-6">
              <dt className="text-xs text-fg-3">{stat.label}</dt>
              <dd className="mt-3 text-[28px] font-medium leading-none tracking-[-0.02em] tabular">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
