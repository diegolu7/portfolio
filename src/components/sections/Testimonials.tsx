import { useState } from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import { testimonials, type Testimonial } from '../../lib/data';

export default function Testimonials() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  return (
    <section id="testimonios" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen quienes trabajaron conmigo"
          subtitle="Referencias reales de líderes de equipo y clientes en proyectos de alto impacto."
        />

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light">
              <Icon name="shield" className="h-4 w-4" /> Referencias verificadas
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle/10 bg-midnight-secondary px-4 py-1.5 text-sm font-medium text-text-muted">
              <Icon name="star" className="h-4 w-4 text-primary-light" /> Recomendados por líderes de equipo
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <button
                onClick={() => setSelected(t)}
                className="group card flex h-full w-full cursor-pointer flex-col !p-7 text-left"
              >
                <div className="flex gap-1 text-primary-light">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Icon key={n} name="star" className="h-4 w-4" strokeWidth={2} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15px] italic leading-relaxed text-text-muted">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-border-subtle/10 pt-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-on-accent"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-text-light">{t.name}</p>
                    <p className="text-xs text-text-muted">
                      {t.role} · {t.company}
                    </p>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-xs font-medium text-primary transition-transform group-hover:translate-x-1">
                    Leer más
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-5">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold text-on-accent"
                style={{ background: `linear-gradient(135deg, ${selected.color}, ${selected.color}88)` }}
              >
                {selected.initials}
              </span>
              <div>
                <h3 className="text-xl font-bold text-text-light">{selected.name}</h3>
                <p className="text-sm text-primary-light">
                  {selected.role} · {selected.company}
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-1 text-primary-light">
              {Array.from({ length: 5 }).map((_, n) => (
                <Icon key={n} name="star" className="h-5 w-5" strokeWidth={2} />
              ))}
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-text-muted">“{selected.full}”</p>
          </div>
        )}
      </Modal>
    </section>
  );
}