import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `tel:+79671394018`;
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">Математика · Михаил</div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">О репетиторе</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button asChild>
              <a href="tel:+79671394018">Записаться</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 text-6xl font-bold select-none pointer-events-none">
          <div className="absolute top-10 left-10">∫ f(x)dx</div>
          <div className="absolute top-40 right-20">π ≈ 3.14159</div>
          <div className="absolute bottom-20 left-1/4">a² + b² = c²</div>
          <div className="absolute top-60 right-1/3">lim x→∞</div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Репетитор по математике
                <span className="text-primary block mt-2">в Солнцево</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Подготовка к ОГЭ и ЕГЭ. Повышение успеваемости. Устранение пробелов в знаниях.
                Офлайн и онлайн занятия с опытным преподавателем.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg">
                  <a href="#contact">Записаться на занятие</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg">
                  <a href="tel:+79671394018">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    +7 967 139-40-18
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ddf9e006-49d1-4bf7-95e9-8d16677fe40f/files/3849a953-1e92-4afb-a4cc-4ccbcfd4350e.jpg"
                alt="Репетитор Михаил"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">О репетиторе</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Высшее образование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Математический факультет МГУ. Кандидат педагогических наук.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>15 лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 200 учеников успешно сдали ОГЭ и ЕГЭ на высокие баллы.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Программа обучения адаптируется под уровень и цели каждого ученика.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Офлайн в Солнцево и онлайн по всей России
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="BookOpen" className="h-6 w-6 text-primary" />
                  Подготовка к ОГЭ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Разбор всех типов заданий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Решение пробных вариантов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Работа над типичными ошибками</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Trophy" className="h-6 w-6 text-primary" />
                  Подготовка к ЕГЭ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Углубленное изучение материала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Решение задач повышенной сложности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Стратегии успешной сдачи экзамена</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="TrendingUp" className="h-6 w-6 text-primary" />
                  Повышение успеваемости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Помощь с домашними заданиями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Объяснение сложных тем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Регулярный контроль знаний</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Laptop" className="h-6 w-6 text-primary" />
                  Онлайн занятия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Удобный формат обучения из дома</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Интерактивная доска и материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Запись уроков для повторения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы учеников</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    А
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна</CardTitle>
                    <CardDescription>Подготовка к ЕГЭ</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Благодаря Михаилу сдала ЕГЭ на 92 балла! Занимались онлайн, очень удобно. 
                  Объясняет понятно, всегда терпелив и внимателен.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    Д
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий</CardTitle>
                    <CardDescription>ОГЭ по математике</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Отличный преподаватель! За полгода занятий подтянул оценку с тройки до пятерки. 
                  ОГЭ сдал на отлично.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    М
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария</CardTitle>
                    <CardDescription>Родитель ученицы 10 класса</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Дочь в восторге от занятий! Михаил смог заинтересовать математикой. 
                  Результаты заметны уже через месяц.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Цены на занятия</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Icon name="MapPin" className="h-5 w-5" />
                  <span className="font-semibold">Офлайн</span>
                </div>
                <CardTitle className="text-3xl">1500 ₽</CardTitle>
                <CardDescription className="text-base">за 60 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Занятия в районе Солнцево</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Личное общение с преподавателем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Все учебные материалы включены</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <a href="#contact">Записаться</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Icon name="Laptop" className="h-5 w-5" />
                  <span className="font-semibold">Онлайн</span>
                </div>
                <CardTitle className="text-3xl">1200 ₽</CardTitle>
                <CardDescription className="text-base">за 60 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Занятия из любой точки мира</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Интерактивная доска</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Запись урока для повторения</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <a href="#contact">Записаться</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            💡 Первое пробное занятие — бесплатно!
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Запись на занятие</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и я свяжусь с вами в ближайшее время
          </p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о целях обучения, классе ученика..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4 text-center">Контакты</h3>
                <div className="space-y-3">
                  <a href="tel:+79671394018" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Phone" className="h-5 w-5" />
                    <span>+7 967 139-40-18</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Icon name="MapPin" className="h-5 w-5" />
                    <span>Район Солнцево, Москва</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm">
            © 2025 Репетитор по математике Михаил · Солнцево · +7 967 139-40-18
          </p>
        </div>
      </footer>
    </div>
  );
}
