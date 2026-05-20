import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function OffersSection() {
  const tabs = [
    {
      id: "payouts",
      icon: "Wallet",
      label: "Выплаты",
      coming: true,
      description: "История выплат, статусы и реквизиты",
    },
    {
      id: "offers",
      icon: "Tag",
      label: "Офферы",
      coming: true,
      description: "Все доступные партнёрские программы",
    },
    {
      id: "available",
      icon: "ListChecks",
      label: "Доступные офферы",
      coming: true,
      description: "Офферы, открытые для подключения прямо сейчас",
    },
  ]

  return (
    <section id="offers" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Личный кабинет партнёра
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Всё необходимое <span className="text-primary">в одном месте</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Отслеживайте выплаты, выбирайте офферы и управляйте участием в партнёрской программе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabs.map((tab) => (
            <Card
              key={tab.id}
              className="border border-border/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={tab.icon} size={20} />
                  </div>
                  <CardTitle className="text-lg">{tab.label}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{tab.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/60 border border-border/40">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Раздел в разработке — скоро откроем
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Разделы появятся после запуска платформы. Следите за обновлениями через Telegram руководителя.
        </p>
      </div>
    </section>
  )
}
