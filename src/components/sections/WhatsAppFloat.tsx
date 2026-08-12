import Icon from '../ui/Icon';
import { profile } from '../../lib/data';

export default function WhatsAppFloat() {
  const text = encodeURIComponent('Hola Diego, quiero hacerte una consulta sobre un proyecto.');
  const href = `https://wa.me/${profile.whatsapp}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden rounded-[10px] border border-primary/30 bg-midnight-secondary/95 px-4 py-2.5 text-sm font-medium text-text-light opacity-100 shadow-lg backdrop-blur-[8px] transition-opacity duration-300 sm:block group-hover:opacity-100">
        Chatear ahora
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110">
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full opacity-30"
          style={{ background: '#25D366' }}
        />
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: '#25D366' }}
        >
          <Icon name="whatsapp" className="h-7 w-7 text-white" />
        </span>
      </span>
    </a>
  );
}