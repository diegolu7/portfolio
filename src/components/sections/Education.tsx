import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { certifications, education } from '../../lib/data';

export default function Education() {
  return (
    <section id="formacion" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Formación"
          title="Formación y certificaciones"
          subtitle="Educación formal en curso y un camino de certificaciones en desarrollo, IA e infraestructura."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={`${e.title}-${e.issuer}`} from={i % 2 === 0 ? 'left' : 'right'}>
              <div className="card flex h-full items-start gap-4 !p-6">
                <span className="icon-circle shrink-0 !h-12 !w-12">
                  <Icon name={i === 0 ? 'graduation' : 'briefcase'} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-text-light">{e.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary-light">{e.issuer}</p>
                  <p className="mt-1 text-xs text-text-muted">{e.year}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-lg font-bold text-text-light">
              <Icon name="shield" className="h-5 w-5 text-primary-light" />
              Certificaciones destacadas
            </h3>
            <span className="rounded-full border border-border-subtle/10 bg-midnight-secondary px-3 py-1 text-xs text-text-muted">
              {certifications.length} certificaciones
            </span>
          </div>
        </Reveal>

        <div className="mt-6 group relative overflow-hidden py-2">
          {/* Fade de bordes */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-midnight to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-midnight to-transparent" />

          {/* Carrusel: items duplicados para loop infinito, se pausa al hacer hover */}
          <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
            {[...certifications, ...certifications].map((c, i) => (
              <div
                key={`${c.title}-${c.issuer}-${i}`}
                className="card h-full w-[280px] shrink-0 items-center gap-3 !p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary-light">
                    <Icon name="star" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-text-light" title={c.title}>
                      {c.title}
                    </p>
                    <p className="truncate text-xs text-text-muted">
                      {c.issuer} · <span className="text-primary-light">{c.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}