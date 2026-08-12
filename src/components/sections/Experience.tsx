import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { experience } from '../../lib/data';

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experiencia profesional"
          title="Mi trayectoria"
          subtitle="Más de 5 años construyendo productos para e-commerce, educación y sistemas corporativos."
        />

        <div className="relative ml-4 sm:ml-6">
          <span
            aria-hidden
            className="absolute bottom-2 left-[14px] top-2 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-transparent"
          />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.08} className="relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-midnight-card shadow-[0_0_16px_rgba(23,168,229,0.25)]">
                  <Icon name={job.icon as never} className="h-4 w-4 text-primary-light" />
                </span>

                <div className="card !p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-text-light">{job.role}</h3>
                        {job.current && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary-light">
                            <Icon name="zap" className="h-3 w-3" />
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm font-semibold text-primary-light">{job.company}</p>
                      <p className="mt-1 text-xs text-text-muted">
                        {job.period} · {job.location}
                      </p>
                    </div>
                    <span className="rounded-md border border-border-subtle/15 bg-midnight-secondary px-3 py-1 text-xs font-medium text-text-muted">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-text-muted">{job.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border-subtle/10 pt-4">
                    {job.stack.map((s) => (
                      <span key={s} className="badge !px-3 !py-1 !text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}