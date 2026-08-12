import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
        {eyebrow}
      </p>
      <h2 className="section-title mt-3">{title}</h2>
      <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-primary to-primary-light" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}