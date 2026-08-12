import { motion } from 'framer-motion';
import Icon from '../ui/Icon';
import { profile } from '../../lib/data';

const cvUrl = `${import.meta.env.BASE_URL}cv/Diego_Luis_Castro_CV_2026_Junio.pdf`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-[70px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(23,168,229,0.15) 0%, rgba(8,17,31,0) 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl"
      />

      <div className="container-page relative z-10 grid items-center gap-14 py-16 lg:grid-cols-[55%_45%]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light"
          >
            <Icon name="pin" className="h-4 w-4" />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.1] text-text-light sm:text-5xl lg:text-[56px]"
          >
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 text-[22px] font-semibold leading-[1.4] text-primary-light"
          >
            {profile.title}
          </motion.h2>

          <motion.p variants={item} className="mt-5 max-w-xl text-text-muted">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-3 text-sm italic text-text-dim">
            “{profile.lema}”
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {profile.tags.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#proyectos" className="btn-primary">
              <Icon name="rocket" className="h-5 w-5" />
              Ver proyectos
            </a>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" download>
              <Icon name="download" className="h-5 w-5" />
              Descargar CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-[14px] border border-primary/30 bg-midnight-secondary/85 p-6 shadow-lg backdrop-blur-[8px]">
            <div className="flex items-center gap-2 border-b border-border-subtle/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs text-text-dim">diego@portfolio: ~</span>
            </div>
            <div className="mt-4 space-y-2 font-mono text-sm">
              <p className="text-text-muted">
                <span className="text-primary-light">$</span> whoami
              </p>
              <p className="text-text-light">{profile.name}</p>
              <p className="mt-3 text-text-muted">
                <span className="text-primary-light">$</span> cat skills.txt
              </p>
              <p className="text-text-light">FullStack · E-commerce · DevOps</p>
              <p className="mt-3 text-text-muted">
                <span className="text-primary-light">$</span> npm run delivery
              </p>
              <p className="text-primary-light">✓ Deploying success…</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 -top-8 flex items-center gap-3 rounded-[16px] border border-primary/30 bg-midnight-secondary/85 px-4 py-3 shadow-lg backdrop-blur-[8px]"
          >
            <span className="icon-circle !h-10 !w-10">
              <Icon name="zap" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-text-light">Clean Architecture</p>
              <p className="text-xs text-text-muted">Buenas prácticas</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-8 -right-4 flex items-center gap-3 rounded-[16px] border border-primary/30 bg-midnight-secondary/85 px-4 py-3 shadow-lg backdrop-blur-[8px]"
          >
            <span className="icon-circle !h-10 !w-10">
              <Icon name="sparkle" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-text-light">+5 años</p>
              <p className="text-xs text-text-muted">Construyendo productos</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a sobre mí"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-text-muted transition-colors hover:text-primary-light"
      >
        <Icon name="chevron-down" className="h-7 w-7" />
      </a>
    </section>
  );
}