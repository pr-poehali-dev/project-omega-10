export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-widest uppercase">Solid <span className="text-primary">Partners</span></h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Партнёрская платформа для размещения офферов и привлечения клиентов через сеть проверенных партнёров.
            </p>
            <p className="text-sm text-muted-foreground mt-4">© 2026 Solid Partners. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О платформе
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Направления
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Стать партнёром
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <a
              href="mailto:solid.partners@mail.ru"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              solid.partners@mail.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
