import { Card, CardContent } from "@/components/ui/card"
import { Rocket, ShoppingBag, CreditCard, BookOpen } from "lucide-react"

const directions = [
  {
    Icon: ShoppingBag,
    category: "E-commerce",
    title: "Интернет-магазины",
    description:
      "Планируем работать с онлайн-ретейлом — офферы с оплатой за покупку (CPS). Партнёры получают процент с каждой продажи, рекламодатели — гарантированных покупателей.",
    tags: ["CPS", "Ретейл", "Fashion"],
  },
  {
    Icon: CreditCard,
    category: "Финансы",
    title: "Финансовые продукты",
    description:
      "Займы, карты, страховки — высококонверсионная ниша для партнёрского маркетинга. Оффер с оплатой за заявку (CPL) позволяет точно контролировать стоимость лида.",
    tags: ["CPL", "Финансы", "Займы"],
  },
  {
    Icon: BookOpen,
    category: "Образование",
    title: "Онлайн-курсы и EdTech",
    description:
      "Образовательные продукты отлично продаются через контент-маркетинг и блогеров. Это направление входит в наши приоритеты с первых месяцев работы платформы.",
    tags: ["CPS", "EdTech", "Курсы"],
  },
  {
    Icon: Rocket,
    category: "Ваша ниша",
    title: "Предложите свой оффер",
    description:
      "Мы на старте и открыты к любым нишам. Если у вас есть продукт и желание запустить партнёрскую программу — напишите нам, обсудим условия лично.",
    tags: ["Любая ниша", "Инди", "Стартап"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Планируемые направления</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Мы ещё не запустились, но уже знаем с какими нишами хотим работать. Станьте первым рекламодателем в своей категории.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directions.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-primary font-semibold">{item.category}</p>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
