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
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-purple-100/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Математика · Михаил
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="font-medium hover:text-purple-600 transition-all hover:scale-105">О репетиторе</a>
              <a href="#services" className="font-medium hover:text-purple-600 transition-all hover:scale-105">Услуги</a>
              <a href="#reviews" className="font-medium hover:text-purple-600 transition-all hover:scale-105">Отзывы</a>
              <a href="#prices" className="font-medium hover:text-purple-600 transition-all hover:scale-105">Цены</a>
              <a href="#contact" className="font-medium hover:text-purple-600 transition-all hover:scale-105">Контакты</a>
            </div>
            <Button asChild className="shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              <a href="tel:+79671394018">Записаться</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] text-8xl font-black select-none pointer-events-none">
          <div className="absolute top-10 left-10 animate-bounce-slow text-purple-600">∫ f(x)dx</div>
          <div className="absolute top-40 right-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>π ≈ 3.14159</div>
          <div className="absolute bottom-20 left-1/4 animate-bounce-slow" style={{ animationDelay: '1s' }}>a² + b² = c²</div>
          <div className="absolute top-60 right-1/3 animate-bounce-slow text-pink-600" style={{ animationDelay: '1.5s' }}>lim x→∞</div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg animate-bounce-slow">
                ✨ Первое занятие бесплатно
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Репетитор по
                <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                  математике
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Подготовка к ОГЭ и ЕГЭ. Повышение успеваемости. Устранение пробелов в знаниях.
                Офлайн и онлайн занятия с опытным преподавателем.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg font-semibold shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  <a href="#contact">Записаться на занятие</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all hover:scale-105">
                  <a href="tel:+79671394018">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    +7 967 139-40-18
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ddf9e006-49d1-4bf7-95e9-8d16677fe40f/files/3849a953-1e92-4afb-a4cc-4ccbcfd4350e.jpg"
                alt="Репетитор Михаил"
                className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white transform transition-transform hover:scale-105 hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">О репетиторе</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Профессионал с подтвержденными результатами</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-110 hover:rotate-12">
                  <Icon name="GraduationCap" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black">Высшее образование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">
                  Математический факультет МГУ. Кандидат педагогических наук.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-2 border-pink-100 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-pink-50/30" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 transition-all hover:scale-110 hover:rotate-12">
                  <Icon name="Award" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black">15 лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">
                  Более 200 учеников успешно сдали ОГЭ и ЕГЭ на высокие баллы.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:rotate-1 bg-gradient-to-br from-white to-purple-50/30" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-110 hover:rotate-12">
                  <Icon name="Target" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-black">Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">
                  Программа обучения адаптируется под уровень и цели каждого ученика.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/40 via-pink-50/30 to-purple-100/40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Услуги</h2>
          <p className="text-center text-gray-700 mb-12 text-xl font-semibold">
            Офлайн в Солнцево и онлайн по всей России
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <Icon name="BookOpen" className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-black">Подготовка к ОГЭ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Разбор всех типов заданий</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Решение пробных вариантов</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Работа над типичными ошибками</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <Icon name="Trophy" className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-black">Подготовка к ЕГЭ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Углубленное изучение материала</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Решение задач повышенной сложности</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Стратегии успешной сдачи экзамена</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <Icon name="TrendingUp" className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-black">Повышение успеваемости</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Помощь с домашними заданиями</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Объяснение сложных тем</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Регулярный контроль знаний</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <Icon name="Laptop" className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-black">Онлайн занятия</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Удобный формат обучения из дома</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Интерактивная доска и материалы</span>
                  </li>
                  <li className="flex items-start gap-2 group/item">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Запись уроков для повторения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Отзывы учеников</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Реальные результаты реальных людей</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:-rotate-1 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-xl shadow-lg">
                    А
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black">Анна</CardTitle>
                    <CardDescription className="font-medium">Подготовка к ЕГЭ</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Благодаря Михаилу сдала ЕГЭ на 92 балла! Занимались онлайн, очень удобно. 
                  Объясняет понятно, всегда терпелив и внимателен.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-pink-50/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center font-black text-white text-xl shadow-lg">
                    Д
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black">Дмитрий</CardTitle>
                    <CardDescription className="font-medium">ОГЭ по математике</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Отличный преподаватель! За полгода занятий подтянул оценку с тройки до пятерки. 
                  ОГЭ сдал на отлично.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:rotate-1 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-black text-white text-xl shadow-lg">
                    М
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black">Мария</CardTitle>
                    <CardDescription className="font-medium">Родитель ученицы 10 класса</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Дочь в восторге от занятий! Михаил смог заинтересовать математикой. 
                  Результаты заметны уже через месяц.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/40 via-pink-50/30 to-purple-100/40"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Цены на занятия</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Прозрачные и честные цены</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-4 border-purple-500 shadow-2xl shadow-purple-500/40 hover:shadow-3xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white via-purple-50/30 to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-1 rounded-bl-xl font-black text-sm shadow-lg">
                Популярно
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-black text-xl">Офлайн</span>
                </div>
                <CardTitle className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1500 ₽</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-600">за 60 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Занятия в районе Солнцево</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Личное общение с преподавателем</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Все учебные материалы включены</span>
                  </li>
                </ul>
                <Button className="w-full shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 transition-all hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-500 font-bold text-lg" asChild>
                  <a href="#contact">Записаться</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-pink-50/30">
              <CardHeader>
                <div className="flex items-center gap-2 text-pink-600 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Icon name="Laptop" className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-black text-xl">Онлайн</span>
                </div>
                <CardTitle className="text-5xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">1200 ₽</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-600">за 60 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Занятия из любой точки мира</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Интерактивная доска</span>
                  </li>
                  <li className="flex items-start gap-2 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Запись урока для повторения</span>
                  </li>
                </ul>
                <Button className="w-full shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-pink-600 font-bold text-lg" variant="outline" asChild>
                  <a href="#contact">Записаться</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl text-xl font-black shadow-xl animate-bounce-slow">
              💡 Первое пробное занятие — бесплатно!
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Запись на занятие</h2>
          <p className="text-center text-gray-700 mb-12 text-xl font-semibold">
            Оставьте заявку, и я свяжусь с вами в ближайшее время
          </p>
          <Card className="border-2 border-purple-300 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-white via-purple-50/20 to-white">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-2 border-purple-200 focus:border-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="border-2 border-purple-200 focus:border-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о целях обучения, классе ученика..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-2 border-purple-200 focus:border-purple-500 transition-all"
                  />
                </div>
                <Button type="submit" className="w-full shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-500 font-bold text-lg" size="lg">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-purple-200">
                <h3 className="font-black mb-4 text-center text-xl">Контакты</h3>
                <div className="space-y-3">
                  <a href="tel:+79671394018" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-all font-semibold group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Phone" className="h-5 w-5 text-white" />
                    </div>
                    <span>+7 967 139-40-18</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700 font-semibold">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <Icon name="MapPin" className="h-5 w-5 text-white" />
                    </div>
                    <span>Район Солнцево, Москва</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold">
            © 2025 Репетитор по математике Михаил · Солнцево · +7 967 139-40-18
          </p>
        </div>
      </footer>
    </div>
  );
}
