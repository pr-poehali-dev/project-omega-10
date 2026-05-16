import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const cases = [
  {
    category: "E-commerce",
    title: "Интернет-магазин одежды",
    description:
      "Рекламодатель разместил оффер с комиссией 8% с продажи. За первый месяц 45 партнёров привели 1 200 новых покупателей.",
    result: "+340% к продажам",
    tags: ["CPS", "Fashion", "Одежда"],
  },
  {
    category: "Финансы",
    title: "Микрофинансовая организация",
    description:
      "Оффер с выплатой за каждую одобренную заявку. Партнёры привели качественный трафик — конверсия в выдачу займа составила 23%.",
    result: "2 400 лидов за месяц",
    tags: ["CPL", "Finance", "Займы"],
  },
  {
    category: "SaaS",
    title: "Платформа автоматизации",
    description:
      "B2B-оффер с высокой ставкой за подписку. Партнёры-эксперты привлекли целевую аудиторию — малый бизнес и предпринимателей.",
    result: "180 новых подписок",
    tags: ["CPS", "SaaS", "B2B"],
  },
  {
    category: "Образование",
    title: "Онлайн-школа программирования",
    description:
      "Оффер за записавшихся на курс студентов. Партнёры использовали контент-маркетинг и YouTube — цена привлечения ниже рынка в 2 раза.",
    result: "520 студентов за квартал",
    tags: ["CPL", "EdTech", "Курсы"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Кейсы платформы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные результаты рекламодателей, которые разместили офферы на EQIUS PARTNERS и получили измеримый рост.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                <div className="flex items-center gap-2 mb-5 p-3 rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-bold text-primary">{item.result}</span>
                </div>
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
