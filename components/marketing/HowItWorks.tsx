const steps = [
  {
    number: "01",
    title: "Upload a photo",
    description: "Pick any image from your device. It is stored with your account.",
  },
  {
    number: "02",
    title: "Choose an edit",
    description:
      "Restore, fill, remove, recolor or strip the background, then preview the result.",
  },
  {
    number: "03",
    title: "Save and download",
    description: "Keep the edit in your library and download it at full size.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-t border-border">
      <div className="container py-24 lg:py-32">
        <h2 className="max-w-[28rem] text-[32px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[40px]">
          Three steps from upload to download
        </h2>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[14px] bg-border md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="bg-canvas p-6 lg:p-8">
              <span className="font-mono text-2xs text-ember-strong">
                {step.number}
              </span>
              <h3 className="mt-8 text-[18px] font-medium leading-[24px]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-fg-2">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
