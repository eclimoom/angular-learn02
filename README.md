# MoomYsh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

1.快速创建并初始化
### 快速安装
`npm install -g @angular/cli`

### 创建并初始化应用 使用scss
`ng new moom-ysh --style=scss`
### 启动应用
`cd moom-ysh && ng serve --open`

####快速生成 core module && base component、service

`ng g module core`

`ng g c core/header`

`ng g c core/footer`

`ng g c core/spinner`

`ng g c core/layout/base-layout --inlineStyle=true | --inlineTemplate=true`

`ng g c core/layout/login-layout --inlineTemplate=true`

`ng g service core/service/logger`

`ng g service core/service/spinner`

`ng g c modules/home/components/home --flat=true`
 
代码地址[https://github.com/eclimoom/angular-learn01]


tree -L 4 -I '*git|*node_module*';



move src/styles.scss  -->  src/assets/scss/styles.scss

配置angular.json

"styles": [
  "src/styles.scss"
],
update to 
 "src/assets/scss/styles.scss"


npm install bootstrap --save


引入bootstrap 4.x
Create an empty file variables.scss in `src/assets/scss/`.

If you are using bootstrap-sass, add the following to variables.scss:

In styles.scss add the following:
@import '~node_modules/bootstrap/scss/bootstrap';

引入字体
`npm install ionicons --save`

add code in `src/assets/scss/ionicons.scss`. 

$ionicons-font-path: "../../../node_modules/ionicons/dist/fonts";
@import "~ionicons/dist/scss/ionicons";

<i class="ion-ios-add-circle"></i>




├── README.md
├── angular.json
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   └── tsconfig.e2e.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── core
│   │   │   ├── core.module.ts
│   │   │   ├── footer
│   │   │   ├── header
│   │   │   ├── index.ts
│   │   │   ├── layout
│   │   │   ├── service
│   │   │   └── spinner
│   │   └── modules
│   │       ├── home
│   │       └── login
│   ├── assets
│   │   └── scss
│   │       ├── _variables.scss
│   │       ├── ionicons.scss
│   │       ├── partials
│   │       └── styles.scss
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
