import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';
import { education, profile, skills, stats } from '../../lib/data';

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Ingeniero de soluciones, no solo de código"
          subtitle="Más de 5 años convirtiendo requerimientos complejos en productos sólidos, rápidos y mantenibles."
        />

        <div className="grid gap-8 lg:grid-cols-[45%_55%]">
          <Reveal from="left">
            <div className="card !p-8 lg:sticky lg:top-24">
              <h3 className="text-xl font-bold text-text-light">Quién soy</h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                Soy un desarrollador web full stack con {profile.experienceYears} años de
                experiencia construyendo soluciones para personas y empresas. Me especializo en
                e-commerce, plataformas educativas, dashboards e integraciones API.
              </p>
              <p className="mt-4 leading-relaxed text-text-muted">
                Hoy me desempeño como FullStack en <span className="text-primary-light">CFV Praxis</span>,
                sobre productos Laravel/WordPress en AWS. Aplico hearth concepts como{' '}
                <span className="text-primary-light">Clean Architecture</span> y buenas prácticas para que
                cada línea de código sume valor real: rendimiento, mantenibilidad y resultados medibles.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4 rounded-[12px] border border-border-subtle/10 bg-midnight-secondary p-4">
                  <span className="icon-circle !h-11 !w-11 shrink-0">
                    <Icon name="briefcase" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-text-light">
                      {profile.experienceYears} años de experiencia
                    </p>
                    <p className="text-sm text-text-muted">
                      E-commerce · Plataformas educativas · Dashboards · APIs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-[12px] border border-border-subtle/10 bg-midnight-secondary p-4">
                  <span className="icon-circle !h-11 !w-11 shrink-0">
                    <Icon name="graduation" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-text-light">Educación</p>
                    <ul className="mt-1 space-y-1 text-sm text-text-muted">
                      {education.map((e) => (
                        <li key={`${e.title}-${e.issuer}`}>
                          • {e.title} — {e.issuer} ({e.year})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="card flex flex-col items-center justify-center !p-5 text-center"
                  >
                    <p className="text-3xl font-extrabold text-primary-light">{s.value}</p>
                    <p className="mt-1 text-xs text-text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {skills.map((cat, i) => (
                <Reveal
                  key={cat.category}
                  delay={i * 0.08}
                  className={i % 2 !== 0 ? 'sm:translate-y-6' : ''}
                >
                  <div className="card h-full !p-6">
                    <h4 className="flex items-center gap-2 text-base font-bold text-text-light">
                      <span className="icon-circle !h-8 !w-8">
                        <Icon name="code" className="h-4 w-4" />
                      </span>
                      {cat.category}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.items.map((s) => (
                        <span key={s} className="badge !px-3 !py-1.5 !text-xs">
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
      </div>
    </section>
  );
}