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
 
代码地址[https://github.com/eclimoom/angular-learn01]





很简单基础的 Angular 5.0写的企业后台管理系统框架，
集成了bootstrap，d3js等常用的库，但只是提供大体布局框架，
需要根据自己的业务需求来布局和填写细节，
目录结构遵守Angular的建议，并结合真实的业务场景，
包括了路由，懒加载，预加载等功能。
