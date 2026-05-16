import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Users, TrendingUp, ShieldCheck, Zap, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Upload,
    title: "Размещение офферов",
    description:
      "Публикуйте свои офферы за несколько минут. Укажите условия, целевую аудиторию и ставку вознаграждения — партнёры сразу увидят ваше предложение и начнут продвижение.",
  },
  {
    icon: Users,
    title: "Сеть партнёров",
    description:
      "Получите доступ к широкой сети проверенных партнёров: арбитражники, блогеры, маркетологи. Выбирайте тех, кто подходит именно для вашей ниши и аудитории.",
  },
  {
    icon: TrendingUp,
    title: "Рост продаж",
    description:
      "Платите только за результат — за реальных клиентов и покупки. Партнёрская модель позволяет масштабировать продажи без лишних рисков и фиксированных затрат.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчёты",
    description:
      "Отслеживайте эффективность каждого оффера в реальном времени. Конверсии, клики, выплаты — вся статистика в одном понятном дашборде.",
  },
  {
    icon: ShieldCheck,
    title: "Защита и доверие",
    description:
      "Фрод-контроль и верификация партнёров обеспечивают чистый трафик. Вы платите только за честные результаты без накруток и серых схем.",
  },
  {
    icon: Zap,
    title: "Быстрые выплаты",
    description:
      "Автоматические выплаты партнёрам по расписанию без задержек. Прозрачные условия расчётов укрепляют доверие и мотивируют партнёров работать активнее.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Возможности платформы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для <span className="text-primary">партнёрского роста</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Solid Partners — это полноценная экосистема для размещения офферов и управления партнёрскими продажами.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}