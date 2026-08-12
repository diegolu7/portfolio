import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import { projects, type Project } from '../../lib/data';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proyectos destacados"
          title="Trabajos que construyen resultados"
          subtitle="Una selección de proyectos reales con foco en arquitectura, rendimiento e impacto de negocio."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <button
                onClick={() => setSelected(p)}
                className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-white/10 bg-midnight-card text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-cardHover"
              >
                <div
                  className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-t-lg"
                  style={{
                    background: `radial-gradient(circle at center, ${p.color}26 0%, rgba(8,17,31,0) 70%)`,
                  }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="icon-circle !h-14 !w-14 transition-transform duration-300 group-hover:scale-110">
                      <Icon name={p.icon as never} className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                  )}
                  <span
                    className="absolute right-4 top-4 flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold text-text-light backdrop-blur-sm transition-transform group-hover:scale-105"
                    style={{ borderColor: `${p.color}66`, background: 'rgba(16,28,46,0.85)' }}
                  >
                    <Icon name="external" className="h-3.5 w-3.5" />
                    Ver detalle
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-[18px]">
                  <h3 className="text-base font-bold text-text-light">{p.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap content-end gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/20 bg-midnight-secondary px-2.5 py-1 text-[11px] font-medium text-text-light"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className="p-6 sm:p-8">
            <div
              className="relative mb-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[12px]"
              style={{
                background: `radial-gradient(circle at center, ${selected.color}26 0%, rgba(8,17,31,0) 70%)`,
              }}
            >
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <span className="icon-circle !h-16 !w-16">
                  <Icon name={selected.icon as never} className="h-8 w-8" strokeWidth={1.5} />
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-text-light">{selected.name}</h3>
            <p className="mt-1 text-primary-light">{selected.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selected.stack.map((s) => (
                <span key={s} className="badge !px-3 !py-1.5 !text-xs">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-5 leading-relaxed text-text-muted">{selected.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={selected.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-5 !py-2.5 text-sm"
              >
                <Icon name="github" className="h-4 w-4" />
                Repositorio
              </a>
              {selected.demo ? (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !px-5 !py-2.5 text-sm"
                >
                  <Icon name="external" className="h-4 w-4" />
                  Demo en vivo
                </a>
              ) : (
                <span className="btn-secondary !cursor-default !px-5 !py-2.5 text-sm opacity-70">
                  <Icon name="close" className="h-4 w-4" />
                  Demo no disponible
                </span>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}