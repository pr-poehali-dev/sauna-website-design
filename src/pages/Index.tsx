import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/projects/6f526374-eb37-4c94-8d5d-b25b52560b8d/files/7519603d-e60e-42c7-8045-abddda6401f6.jpg',
      title: 'Финская сауна'
    },
    {
      url: 'https://cdn.poehali.dev/projects/6f526374-eb37-4c94-8d5d-b25b52560b8d/files/e26dcae4-bbab-449f-8a24-b860a7d93597.jpg',
      title: 'Открытый бассейн'
    },
    {
      url: 'https://cdn.poehali.dev/projects/6f526374-eb37-4c94-8d5d-b25b52560b8d/files/ebad1d26-2091-43cb-afe1-85818d281bc6.jpg',
      title: 'Зона барбекю'
    }
  ];

  const features = [
    { icon: 'Flame', title: 'Финская сауна', description: 'Сухая парная с оптимальной температурой' },
    { icon: 'Waves', title: 'Открытый бассейн', description: '12×6 метров, работает май–октябрь' },
    { icon: 'UtensilsCrossed', title: 'Зона барбекю', description: 'Мангальная зона для отдыха' },
    { icon: 'Wifi', title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет' },
    { icon: 'Home', title: 'Летняя беседка', description: 'Комфортная зона для компании' },
    { icon: 'ParkingCircle', title: 'Парковка', description: 'Бесплатная охраняемая парковка' },
    { icon: 'Bath', title: 'Банные принадлежности', description: 'Полотенца, простыни в комплекте' },
    { icon: 'Users', title: 'От 2 до 10 человек', description: 'Подходит для любой компании' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Черноморская звезда</h1>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-6">
                <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
                  Галерея
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                  Контакты
                </button>
              </nav>
              <a href="tel:+79384502228" className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
                +7 938 450-22-28
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${images[activeImage].url})` 
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Сауна «Черноморская звезда»
          </h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            Идеальное место для отдыха и релаксации в окружении природы
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-3">
                <Icon name="Users" size={32} />
                <div className="text-left">
                  <div className="text-sm opacity-90">Вместимость</div>
                  <div className="text-xl font-bold">2–10 человек</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={32} />
                <div className="text-left">
                  <div className="text-sm opacity-90">Минимум</div>
                  <div className="text-xl font-bold">от 2 часов</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex items-center gap-3">
                <Icon name="Wallet" size={32} />
                <div className="text-left">
                  <div className="text-sm opacity-90">Стоимость</div>
                  <div className="text-xl font-bold">от 2500 ₽</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white shadow-xl"
              onClick={() => window.location.href = 'tel:+79384502228'}
            >
              <Icon name="Phone" size={24} className="mr-2" />
              Забронировать
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30"
              onClick={() => scrollToSection('features')}
            >
              Узнать подробнее
              <Icon name="ChevronDown" size={24} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeImage === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="promo" className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Icon name="Gift" size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Специальное предложение</h3>
                <p className="text-xl opacity-95">Скидка 10% имениннику в день рождения!</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6 shadow-xl whitespace-nowrap"
              onClick={() => window.location.href = 'tel:+79384502228'}
            >
              Забронировать со скидкой
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наши услуги и удобства</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для комфортного отдыха в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Условия аренды</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={40} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Минимальное время</h4>
                  <p className="text-muted-foreground">Аренда от 2 часов</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Wallet" size={40} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Стоимость</h4>
                  <p className="text-muted-foreground">От 2500 рублей</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={40} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Уточнение деталей</h4>
                  <p className="text-muted-foreground">Точную стоимость уточняйте по телефону</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Посмотрите, как выглядит наша сауна
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-xl font-semibold p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Контакты и бронирование</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами для уточнения деталей и бронирования
              </p>
            </div>

            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary to-accent p-12 text-white text-center">
                  <Icon name="Phone" size={64} className="mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Позвоните нам прямо сейчас</h3>
                  <a 
                    href="tel:+79384502228" 
                    className="text-5xl md:text-6xl font-bold hover:opacity-80 transition-opacity inline-block"
                  >
                    +7 938 450-22-28
                  </a>
                  <p className="text-xl mt-6 opacity-90">
                    Мы ответим на все ваши вопросы и поможем с бронированием
                  </p>
                  <Button 
                    size="lg" 
                    className="mt-8 bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 shadow-xl"
                    onClick={() => window.location.href = 'tel:+79384502228'}
                  >
                    <Icon name="Phone" size={28} className="mr-3" />
                    Позвонить сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Черноморская звезда</h3>
              <p className="opacity-90">Сауна для вашего комфортного отдыха</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl font-semibold mb-2">Бронирование</p>
              <a href="tel:+79384502228" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                +7 938 450-22-28
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>© 2026 Сауна «Черноморская звезда». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;