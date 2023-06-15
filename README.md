# BlogNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

Desenvolvido com o intuito de aprender Angular, esse projeto é a refatoração de outro feito em Nextjs.

Trata-se de um Blog simples que consumira de uma API que eu fiz com Nestjs (Prisma, Mongodb), nessa aplicação será possível criar, deletar, atualizar e mostrar uma publicação, fazer login e gerenciamento de autenticação de usuários

## Estrutura do projeto

A estrutura de pastas da aplicação seguindo o padrão Atomic Design

```
src
|--- app
  |--- shared // componentes compartilhados em toda aplicação.
    |--- assets
      |--- icons // situacional
      |--- images // situacional

    |--- components
      |--- atoms
      |--- molecules
      |--- organisms
      |--- templates

  |--- components
    |--- browse
      |--- browse.component.html
      |--- browse.interfaces.d.ts
      |--- browse.component.scss
      |--- browse.component.spec.ts
      |--- browse.component.ts
      |--- browse.module.ts
```

Além da formatação de arquivos padrão do Angular, os componentes serão padronizados dessa forma:

```
xyz
  |--- xyz.component.html
  |--- xyz.interfaces.d.ts
  |--- xyz.component.scss
  |--- xyz.component.spec.ts
  |--- xyz.component.ts
  |--- xyz.module.ts

  sub
    |--- sub.component.html
    |--- sub.interfaces.d.ts
    |--- sub.component.scss
    |--- sub.component.spec.ts
    |--- sub.component.ts
    |--- sub.module.ts

    sub-two
      |--- sub-two.component.html
      |--- sub-two.interfaces.d.ts
      |--- sub-two.component.scss
      |--- sub-two.component.spec.ts
      |--- sub-two.component.ts
      |--- sub-two.module.ts
```

## Folhas de estilo

Feito com scss e padronizado com BEM.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

```

```

```

```
