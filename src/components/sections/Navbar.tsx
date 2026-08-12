import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../ui/Icon';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'formacion', label: 'Formación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'testimonios', label: 'Testimonios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links
        .map((l) => document.getElementById(l.id))
        .filter((el): el is HTMLElement => el !== null);
      let current = 'inicio';
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= 120) current = el.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? 'border-white/10 bg-midnight/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-[70px] items-center justify-between">
        <button
          onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-[18px] font-bold tracking-[0.5px] text-text-light"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-primary text-midnight">
            <Icon name="terminal" className="h-4 w-4" />
          </span>
          DL<span className="text-primary-light">.dev</span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className={`relative pb-2 text-sm font-medium transition-colors duration-200 hover:text-primary-light ${
                active === l.id ? 'text-primary' : 'text-text-light'
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-primary-light"
                />
              )}
            </button>
          ))}
          <a
            href="#contacto"
            onClick={() => goTo('contacto')}
            className="btn-primary !px-5 !py-2.5 text-sm"
          >
            Contratarme
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/20 bg-midnight-secondary text-text-light lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-midnight lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={`rounded-[8px] px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-midnight-secondary ${
                    active === l.id ? 'text-primary' : 'text-text-light'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}