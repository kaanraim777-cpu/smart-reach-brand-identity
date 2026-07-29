# Smart Reach Brand Identity

ОФИЦИАЛНО ЛОГО НА SMART REACH

Използвай прикачения файл:

SMART REACH LOGONEW.png

Това е официалното лого на Smart Reach и трябва задължително да присъства в сайта.

Не:

създавай ново лого;

прерисувай логото;

променяй текста в него;

сменяй цветовете му;

добавяй филтри върху него;

разтягай или деформирай изображението;

заменяй логото с обикновен текст;

използвай генерирана или приблизителна версия.

Запази оригиналното съотношение на изображението и използвай object-fit: contain.

Добави описателен alt текст:

Smart Reach – дигитална маркетинг агенция

Лого в навигацията

Постави официалното лого в горния ляв ъгъл на floating навигацията.

Тъй като логото е квадратно и съдържа собствен dark navy фон:

покажи го в компактен контейнер с размер приблизително 44–48 px;

използвай 10–12 px border radius;

не добавяй бяла рамка;

не изрязвай важни части от логото;

не премахвай оригиналния му фон;

запази достатъчно празно пространство около него.

До логото добави текстов wordmark:

Smart Reach

Wordmark стил:

DM Sans;

weight 700;

приблизително 17–18 px;

цвят #0A0620;

леко negative letter spacing;

без градиент;

без glow ефект.

На много малки мобилни екрани wordmark текстът може да бъде скрит, но самото официално лого трябва да остане видимо.

Лого във футъра

Използвай същия оригинален файл и във футъра.

Във футъра:

размер приблизително 80–100 px;

оригинално съотношение;

без промяна на цветовете;

без допълнителен фон зад изображението;

достатъчно разстояние до текста и линковете.

Не използвай различна или автоматично генерирана версия на логото.

ЦВЕТОВА СИСТЕМА, БАЗИРАНА НА ЛОГОТО

Изгради цялата цветова идентичност на сайта според реалните цветове в прикаченото Smart Reach лого.

Основните извлечени бранд цветове са:

Deep navy: #04003D

Dark indigo: #15015A

Core indigo: #06008E

Royal blue: #0020AB

Electric blue: #0529B3

Brand violet: #3600AA

Deep violet: #1A0299

Pure white: #FFFFFF

Използвай следните CSS variables:

:root {
  --bg: #FFFFFF;
  --bg-soft: #FAF9FF;
  --bg-alt: #F5F3FF;

  --text: #0A0620;
  --text-secondary: #3D3952;
  --text-muted: #716C84;

  --brand-navy: #04003D;
  --brand-indigo-dark: #15015A;
  --brand-indigo: #06008E;
  --brand-blue: #0020AB;
  --brand-blue-bright: #0529B3;
  --brand-violet: #3600AA;
  --brand-violet-deep: #1A0299;

  --border: #E8E5F0;
  --border-soft: #F0EEF6;
  --white: #FFFFFF;

  --brand-gradient: linear-gradient(
    135deg,
    #0020AB 0%,
    #06008E 45%,
    #3600AA 100%
  );

  --brand-gradient-reverse: linear-gradient(
    135deg,
    #3600AA 0%,
    #0020AB 100%
  );

  --brand-glow-blue: rgba(0, 32, 171, 0.20);
  --brand-glow-violet: rgba(54, 0, 170, 0.22);
}


ПРИЛОЖЕНИЕ НА ЦВЕТОВЕТЕ

Основният сайт трябва да остане светъл и минималистичен като dmset.ai.

Използвай:

#FFFFFF за основния фон;

#FAF9FF и #F5F3FF за редуващи се светли секции;

#0A0620 за основните заглавия;

#3D3952 за body текст;

#716C84 за второстепенна информация;

#E8E5F0 за borders и разделители;

brand gradient за основните CTA бутони и избрани текстови акценти;

#04003D за финалната CTA секция и футъра.

Не използвай произволни cyan, pink, neon green или turquoise акценти. Всички основни цветове трябва да произлизат от синьо-лилавата идентичност на логото.

БУТОНИ

Основните CTA бутони трябва да използват:

background: linear-gradient(
  135deg,
  #0020AB 0%,
  #3600AA 100%
);
color: #FFFFFF;


Hover състояние:

повдигане с максимум 2 px;

леко увеличаване на наситеността;

сянка с blue/violet glow;

без прекалено силен neon ефект.

Примерна сянка:

box-shadow:
  0 10px 28px rgba(0, 32, 171, 0.20),
  0 6px 18px rgba(54, 0, 170, 0.16);


Secondary бутоните трябва да бъдат:

бели или прозрачни;

с border #DCD8E8;

текст #15015A;

лек lavender фон при hover.

ТЕКСТОВИ АКЦЕНТИ

Използвай brand gradient само върху внимателно подбрани думи или кратки фрази.

Пример:

background: linear-gradient(
  135deg,
  #0020AB 0%,
  #3600AA 100%
);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


Не прави цели параграфи или прекалено много заглавия градиентни.

Instrument Serif Italic акцентите могат да използват:

основния текстов цвят #0A0620;

или brand gradient, когато са част от основно заглавие.

КАРТИ И UI MOCKUPS

Картите трябва да използват:

бял фон;

border #E8E5F0;

18–24 px radius;

много деликатна navy/violet сянка;

lavender highlight при hover.

Примерна стандартна сянка:

box-shadow:
  0 2px 8px rgba(4, 0, 61, 0.05),
  0 1px 3px rgba(21, 1, 90, 0.04);


Примерна по-силна сянка:

box-shadow:
  0 20px 60px rgba(4, 0, 61, 0.10),
  0 6px 20px rgba(54, 0, 170, 0.07);


UI mockups могат да използват:

#04003D за тъмни панели;

#06008E за активни състояния;

#0020AB за primary data highlights;

#3600AA за secondary highlights;

много светъл lavender за неактивни полета;

бяло за основното съдържание.

ФОНОВИ ЕФЕКТИ

Добави само много деликатни blurred radial gradients.

Пример:

background:
  radial-gradient(
    circle at 20% 10%,
    rgba(0, 32, 171, 0.10),
    transparent 35%
  ),
  radial-gradient(
    circle at 80% 20%,
    rgba(54, 0, 170, 0.09),
    transparent 38%
  ),
  #FFFFFF;


Фоновите glow ефекти трябва да бъдат едва забележими. Те не трябва да намаляват четимостта или да превръщат сайта в neon/crypto дизайн.

ТЪМНИ СЕКЦИИ

Финалната CTA секция и футърът трябва да използват:

background:
  radial-gradient(
    circle at 20% 0%,
    rgba(0, 32, 171, 0.35),
    transparent 40%
  ),
  radial-gradient(
    circle at 85% 30%,
    rgba(54, 0, 170, 0.30),
    transparent 42%
  ),
  #04003D;


Текстът в тъмните секции трябва да бъде бял или светлолилав.

ВАЖНИ ОГРАНИЧЕНИЯ

Използвай задължително прикаченото официално лого.

Не създавай ново лого или wordmark вместо него.

Не променяй цветовете на логото.

Не вземай основните цветове от произволен SaaS template.

Не използвай основния син цвят на dmset.ai.

Замени синята идентичност на референцията с blue/violet идентичността на Smart Reach.

Не прави целия сайт тъмен.

Не използвай прекалено ярък purple neon.

Не използвай розово като основен цвят.

Не поставяй glow зад всеки компонент.

Цветовете трябва да изглеждат premium, контролирани и последователни.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8fc34d88-61ce-4d73-bcf5-f125a09bf729).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
