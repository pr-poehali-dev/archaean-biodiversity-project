import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Section {
  id: number;
  icon: string;
  title: string;
  content: string[];
  image?: string;
  timeline?: TimelineEvent[];
}

const sections: Section[] = [
  {
    id: 0,
    icon: 'BookOpen',
    title: 'Введение в эпоху Архея',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/c5be524e-e4a1-426a-86eb-f47fdc5d0729.jpg',
    content: [
      'Архей (Архейский эон) — один из древнейших периодов в истории Земли, продолжавшийся с 4,0 до 2,5 миллиардов лет назад.',
      'Название происходит от греческого слова "archaios" — древний.',
      'Это время зарождения первых форм жизни на планете и формирования основ биосферы.',
      'Архей делится на четыре эры: Эоархей, Палеоархей, Мезоархей и Неоархей.',
    ],
  },
  {
    id: 1,
    icon: 'Wind',
    title: 'Состав атмосферы и условия жизни',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/c5be524e-e4a1-426a-86eb-f47fdc5d0729.jpg',
    content: [
      'Атмосфера Архея была бескислородной и состояла из метана (CH₄), аммиака (NH₃), водорода (H₂) и водяных паров.',
      'Температура поверхности была значительно выше современной — около 50-80°C.',
      'Интенсивное вулканическое излияние насыщало атмосферу углекислым газом.',
      'Отсутствие озонового слоя означало высокий уровень ультрафиолетового излучения.',
      'Океаны были теплыми и богаты растворенными минералами, создавая идеальную среду для химических реакций.',
    ],
  },
  {
    id: 2,
    icon: 'Microscope',
    title: 'Первые живые существа',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/c2a41c01-fda5-4deb-a42f-e20c983e60c0.jpg',
    content: [
      'Первыми живыми организмами были прокариоты — одноклеточные существа без ядра.',
      'Археи и бактерии — древнейшие формы жизни, появившиеся около 3,5-3,8 млрд лет назад.',
      'Цианобактерии (сине-зеленые водоросли) — первые фотосинтезирующие организмы.',
      'Они начали производить кислород в процессе фотосинтеза, постепенно изменяя атмосферу.',
      'Строматолиты — окаменевшие структуры, образованные колониями цианобактерий, до сих пор находят в Австралии.',
    ],
  },
  {
    id: 3,
    icon: 'Sprout',
    title: 'Растительность и водоросли',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/0daf2ae1-f673-4b18-83a3-7adfc6133b7a.jpg',
    content: [
      'В современном понимании растений в Архее не существовало.',
      'Цианобактерии выполняли роль первичных продуцентов в экосистеме.',
      'Сине-зеленые водоросли формировали биопленки на поверхности водоемов.',
      'Эти микроорганизмы создавали кислород как побочный продукт фотосинтеза.',
      'Именно они заложили основу для будущего развития многоклеточной растительности.',
    ],
  },
  {
    id: 4,
    icon: 'Fish',
    title: 'Животные организмы периода',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/e5acd49c-1367-453b-b15d-bb8d0c2862ee.jpg',
    content: [
      'Многоклеточных животных в Архее не существовало.',
      'Жизнь была представлена исключительно одноклеточными организмами.',
      'Хемосинтезирующие бактерии получали энергию из химических соединений (сероводород, метан).',
      'Гетеротрофные бактерии питались органическими веществами, созданными другими организмами.',
      'Все формы жизни были микроскопическими и обитали преимущественно в водной среде.',
    ],
  },
  {
    id: 5,
    icon: 'GitBranch',
    title: 'Эволюционные процессы и адаптация',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/2044b06e-4455-4759-8d4e-91e079a7bae4.jpg',
    content: [
      'Горизонтальный перенос генов между бактериями ускорял эволюционные изменения.',
      'Развитие фотосинтеза стало ключевым эволюционным прорывом.',
      'Появление анаэробного дыхания позволило организмам эффективнее использовать энергию.',
      'Формирование защитных механизмов от УФ-излучения через пигменты.',
      'Адаптация к экстремальным условиям (температура, кислотность, давление) заложила основу разнообразия жизни.',
    ],
  },
  {
    id: 6,
    icon: 'Award',
    title: 'Итоги и значение Архея',
    image: 'https://cdn.poehali.dev/projects/5ccb01e7-0e53-4429-a452-d5c1120944b0/files/6a97630a-21ae-42b5-ad00-8dbe6dd19a18.jpg',
    content: [
      'Архей заложил фундамент для всей последующей эволюции жизни на Земле.',
      'Появление фотосинтеза привело к Великому кислородному событию (2,4 млрд лет назад).',
      'Накопление кислорода в атмосфере создало условия для появления аэробных организмов.',
      'Формирование первых континентальных платформ и океанических бассейнов.',
      'Архейские микроорганизмы стали предками всех современных форм жизни.',
      'Изучение этого периода помогает понять происхождение жизни и условия на ранней Земле.',
    ],
  },
];

const timelineData: TimelineEvent[] = [
  {
    year: '4,0 млрд',
    title: 'Начало Архея',
    description: 'Формирование первых континентальных структур',
  },
  {
    year: '3,8 млрд',
    title: 'Появление первых клеток',
    description: 'Возникновение прокариотов — археи и бактерии',
  },
  {
    year: '3,5 млрд',
    title: 'Цианобактерии',
    description: 'Появление фотосинтезирующих организмов',
  },
  {
    year: '3,2 млрд',
    title: 'Строматолиты',
    description: 'Формирование биогенных структур',
  },
  {
    year: '2,7 млрд',
    title: 'Накопление кислорода',
    description: 'Начало изменения состава атмосферы',
  },
  {
    year: '2,5 млрд',
    title: 'Конец Архея',
    description: 'Переход к Протерозойской эре',
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);

  const nextSlide = () => {
    if (currentSlide < sections.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowTimeline(false);
  };

  if (showTimeline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-[#0c1420] flex flex-col animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-8 left-8 text-white hover:bg-white/10"
            onClick={() => setShowTimeline(false)}
          >
            <Icon name="ArrowLeft" size={24} />
          </Button>

          <div className="w-full max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Временная шкала Архея
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-secondary/30 -translate-x-1/2" />

              <div className="space-y-12">
                {timelineData.map((event, index) => (
                  <div
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <Card className="p-6 bg-white/95 backdrop-blur border-none shadow-xl">
                          <h3 className="text-2xl font-bold text-primary mb-2">{event.year}</h3>
                          <h4 className="text-xl font-semibold text-secondary mb-2">
                            {event.title}
                          </h4>
                          <p className="text-muted-foreground">{event.description}</p>
                        </Card>
                      </div>

                      <div className="relative flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-secondary border-4 border-primary shadow-lg" />
                      </div>

                      <div className="flex-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentSection = sections[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-[#0c1420] flex flex-col">
      <div className="absolute top-8 right-8 z-10">
        <Button
          variant="secondary"
          onClick={() => setShowTimeline(true)}
          className="gap-2 shadow-lg"
        >
          <Icon name="Clock" size={20} />
          Временная шкала
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-4xl animate-fade-in">
          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur border-none shadow-2xl">
            {currentSection.image && (
              <div className="mb-8 -mx-8 md:-mx-12 -mt-8 md:-mt-12">
                <img
                  src={currentSection.image}
                  alt={currentSection.title}
                  className="w-full h-64 md:h-80 object-cover rounded-t-xl"
                />
              </div>
            )}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={currentSection.icon as any} size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {currentSection.title}
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              {currentSection.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="gap-2"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Назад
                </Button>

                <div className="flex gap-2">
                  {sections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-secondary w-8'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Перейти к слайду ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={nextSlide}
                  disabled={currentSlide === sections.length - 1}
                  className="gap-2"
                >
                  Далее
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>

              <div className="text-center mt-6 text-sm text-muted-foreground">
                Слайд {currentSlide + 1} из {sections.length}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;