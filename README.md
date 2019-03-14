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



tree -d	只显示文件夹
tree -D	显示文件的最后修改时间
tree -L n	n表示显示项目的层级，n=3即只显示项目的三层结构
tree -I pattern	pattern表示想要过滤的目录，例如 tree -I “node_modules”可以过滤掉node_modules这个文件夹
注意，这里的参数-d、-D区分大小写，大家可以自行实验



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
