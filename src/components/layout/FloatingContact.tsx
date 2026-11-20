import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

/** Always-visible WhatsApp shortcut. */
export function FloatingContact() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-bull text-bull-foreground shadow-bull transition-transform hover:scale-105 animate-float"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-dot" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
