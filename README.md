# Traffic Racer

🔗 Website: [traffic-racer.ru](https://traffic-racer.ru)

Динамичная Endless-игра, разработанная в рамках курса [Мидл фронтенд-разработчик](https://practicum.yandex.ru/middle-frontend/)

[//]: # (docs/gameplay.mp4)
https://user-images.githubusercontent.com/15361093/219150187-5f993bbd-0410-47b3-9160-a27e6c7a45b6.mp4

## Стек технологий
- `React`, `Redux Toolkit` и `Redux Thunk`
- `Ant Design of React` - UI библиотека
- `React Hook Form` + `Yup` - для валидации форм
- `SASS` - препроцессор CSS
- `Express` для SSR и API форума и темизации
- `Docker`, `Docker-Compose` для автоматического развёртывания приложения
- `PostgreSQL` для хранения данных форума и темизации
- `MongoDB` для хранения данных от формы обратной связи
- `nginx` для SSL, HTTP/2, раздачи статики и проксирования

## Используемые WEB API
 - `Canvas` - реализация игры на чистом Canvas
 - `Fullscreen` - полноэкранный режим в игре
 - `ServiceWorker` - кеширование и offline-режим
 - `Web Audio` - музыка и звуки в игре
 - `Geolocation` - получение координат игрока
 - `Telegram Bot API` - уведомления команды о PR, CR и запросах из формы обратной связи

## Документация

Проект представляет из себя `монорепозиторий` на основе [`lerna`](https://github.com/lerna/lerna) и состоит из следующих пакетов:

- **[@Traffic-Racer/client](./packages/client)**
    - [React](https://github.com/facebook/react) приложение.

### Как правильно писать коммиты?
Можно почитать в соответствующей разделе [документации](docs/README.md)


- **[@Traffic-Racer/server](./packages/server)**
    - [Express](https://github.com/expressjs/express) приложение.
    - Использует в качестве зависимости пакет `@Traffic-Race/client` package.
    - Слушает http://localhost:3000 (CSR) и http://localhost:5000 (SSR).

Более подробно c проектом можно ознакомиться в отдельных разделах документации:

- [Установка и запуск проекта](docs/installation.md)
- [Flow работы с проектом](docs/workFlow.md)
- [Соглашение об именах](docs/TeamRules.md)
- [Описание ручек API](docs/backendAPI.md)
- [Как использовать Redux](docs/redux.md)
- [Подключение ручек для клиентской части](docs/api.md)

## Команда
| <img src="https://avatars.githubusercontent.com/u/15361093" alt="rufflet avatar" style="height: 100px; width: 100px;"/> | <img src="https://avatars.githubusercontent.com/u/80040087" alt="swash1 avatar" style="height: 100px; width: 100px;"/> | <img src="https://avatars.githubusercontent.com/u/102159279" alt="al-nvrsk avatar" style="height: 100px; width: 100px;"/> | <img src="https://avatars.githubusercontent.com/u/98592153" alt="StepanovaValeriya avatar" style="height: 100px; width: 100px;"/> | <img src="https://avatars.githubusercontent.com/u/46169693" alt="LarryBezrukov avatar" style="height: 100px; width: 100px;"/> |
|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Александр Ершов                                                                                                         | Тимур Хайретдинов                                                                                                      | Алексей Батутен                                                                                                           | Валерия Степанова                                                                                                                 | Илларион Безруков                                                                                                             |
| [@Rufflet](https://github.com/Rufflet)                                                                                  | [@swash1](https://github.com/swash1)                                                                                   | [@Al-nvrsk](https://github.com/Al-nvrsk)                                                                                  | [@StepanovaValeriya](https://github.com/StepanovaValeriya)                                                                        | [@LarryBezrukov](https://github.com/LarryBezrukov)                                                                            |

