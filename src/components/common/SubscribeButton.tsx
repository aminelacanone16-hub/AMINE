import { useState, type ReactNode } from "react";
import { MessageCircle, Send, ShieldCheck } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { subscribeMessage, telegramLink, whatsappLink } from "@/lib/contact";
import { formatPrice } from "@/lib/pricing";

interface SubscribeButtonProps {
  product: string;
  plan?: string;
  price?: number;
  children: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}

/** Opens a dialog that sends the chosen product/plan to WhatsApp or Telegram. */
export function SubscribeButton({
  product,
  plan,
  price,
  children,
  variant = "gold",
  size = "xl",
  className,
}: SubscribeButtonProps) {
  const [open, setOpen] = useState(false);
  const priceText = price !== undefined ? formatPrice(price) : undefined;
  const message = subscribeMessage(product, plan, priceText);

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="card-lux max-w-md border-gold/20 bg-surface p-0 sm:rounded-3xl">
          <div className="p-6 sm:p-8">
            <DialogHeader className="text-start">
              <DialogTitle className="font-display text-2xl font-black">أكمل اشتراكك</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                تواصل مع فريق TRADER X لإتمام الدفع واستلام تعليمات الوصول.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold-soft p-4">
              <div className="text-xs text-muted-foreground">اخترت</div>
              <div className="mt-1 font-display text-lg font-bold">{product}</div>
              {(plan || priceText) && (
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-foreground/80">{plan}</span>
                  {priceText && <span className="font-bold text-gold">{priceText}</span>}
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-3">
              <Button asChild variant="bull" size="xl" className="w-full">
                <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  المتابعة عبر واتساب
                </a>
              </Button>
              <Button asChild variant="glass" size="xl" className="w-full">
                <a href={telegramLink()} target="_blank" rel="noopener noreferrer">
                  <Send />
                  المتابعة عبر تيليغرام
                </a>
              </Button>
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              محتوى تعليمي فقط. التداول ينطوي على مخاطر ولا توجد أرباح مضمونة.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
