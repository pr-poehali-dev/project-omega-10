import { Quote, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CEOSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Слово основателя
          </div>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <Quote className="h-12 w-12 text-primary mb-6 opacity-80" />
          <p className="text-xl sm:text-2xl leading-relaxed text-foreground max-w-3xl mb-10 text-balance">
            Мы создаём Solid Partners, потому что верим: партнёрский маркетинг должен быть честным и доступным для всех. Не нужно быть крупной корпорацией, чтобы запустить свою партнёрскую программу. Мы только начинаем — и именно сейчас самый лучший момент, чтобы войти в это вместе с нами.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
              ИУ
            </div>
            <p className="font-bold text-lg">Ужгатин Илья Алексеевич</p>
            <p className="text-muted-foreground text-sm">CEO & Основатель, Solid Partners</p>
            <a href="https://t.me/IliaSolid" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2 mt-1">
                <Send className="h-4 w-4" />
                @IliaSolid
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}