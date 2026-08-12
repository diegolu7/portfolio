import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { services } from '../../lib/data';

export default function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios"
          title="Qué puedo ofrecerte"
          subtitle="Colaboro como freelancer, consultor o parte de tu equipo para llevar tu producto al siguiente nivel."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <div className="card group flex h-full flex-col !p-6">
                <span className="icon-circle transition-transform duration-300 group-hover:scale-110">
                  <Icon name={s.icon as never} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 flex min-h-[48px] items-start text-base font-bold leading-snug text-text-light">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{s.description}</p>
                <ul className="mt-auto space-y-2 border-t border-border-subtle/10 pt-4 [&>li:first-child]:mt-4">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-text-muted">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="card flex flex-col items-center justify-between gap-5 !p-8 sm:flex-row">
            <div>
              <h3 className="text-lg font-bold text-text-light">¿Tienes un proyecto en mente?</h3>
              <p className="mt-1 text-sm text-text-muted">
                Hablemos sobre cómo puedo sumar valor a tu producto o equipo.
              </p>
            </div>
            <a href="#contacto" className="btn-primary shrink-0">
              <Icon name="mail" className="h-5 w-5" />
              Empecemos ahora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}