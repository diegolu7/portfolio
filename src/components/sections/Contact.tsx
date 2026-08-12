import { useState } from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { profile } from '../../lib/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Contacto] ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const socials = [
    { name: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' as const },
    { name: 'GitHub', href: profile.github, icon: 'github' as const },
    { name: 'Twitter', href: profile.twitter, icon: 'twitter' as const },
    { name: 'Email', href: `mailto:${profile.email}`, icon: 'mail' as const },
  ];

  return (
    <section id="contacto" className="section-padding">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto"
          subtitle="Estoy disponible para colaboraciones, consultorías y desarrollo de proyectos. Respondo en menos de 24 horas."
        />

        <div className="grid gap-8 lg:grid-cols-[40%_60%]">
          <Reveal from="left">
            <div className="flex h-full flex-col gap-5">
              <div className="card !p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-text-light">
                  <span className="icon-circle !h-9 !w-9">
                    <Icon name="calendar" className="h-4 w-4" />
                  </span>
                  Agenda una llamada
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  Prefieres hablar directo? Estoy disponible para coordinar una videollamada.
                </p>
                <a href={`tel:${profile.phone}`} className="btn-secondary mt-4 !px-5 !py-2.5 text-sm">
                  <Icon name="phone" className="h-4 w-4" />
                  {profile.phone}
                </a>
              </div>

              <div className="card flex-1 !p-6">
                <h3 className="text-base font-bold text-text-light">Información directa</h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-primary-light"
                >
                  <span className="icon-circle !h-9 !w-9">
                    <Icon name="mail" className="h-4 w-4" />
                  </span>
                  {profile.email}
                </a>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target={s.icon === 'mail' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      title={s.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-midnight"
                    >
                      <Icon name={s.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal from="right">
            <form
              onSubmit={handleSubmit}
              className="card space-y-5 !p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-light">
                    Nombre
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Tu nombre"
                    className="w-full rounded-[8px] border border-white/15 bg-midnight-secondary px-4 py-3 text-sm text-text-light placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-light">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="tu@email.com"
                    className="w-full rounded-[8px] border border-white/15 bg-midnight-secondary px-4 py-3 text-sm text-text-light placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-light">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Cuéntame sobre tu proyecto, objetivos y plazos…"
                  className="w-full resize-none rounded-[8px] border border-white/15 bg-midnight-secondary px-4 py-3 text-sm text-text-light placeholder:text-text-dim focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Icon name="send" className="h-5 w-5" />
                Enviar mensaje
              </button>

              {sent && (
                <p className="rounded-[8px] border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary-light">
                  ¡Gracias! Se abrió tu cliente de correo con el mensaje listo para enviar.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}