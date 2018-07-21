# angular-app
 - angular-cli+cmui+html5+css3+typescript+tslint+webpack
 - 适合开发各种webapp、企业网站、后台管理系统等等任何系统
 - cmui仓库为https://github.com/womendi/cmui.git
 - 结合hbuilder打包，可以直接做成全平台应用。例如 亲信地铁（vueapp） 腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro
 
 - 代码实例：      ai智能空间angular版 http://ajs.aiplat.com
 - 实例相对应网站1：ai智能空间vue版     http://www.aiplat.com 
 - 实例相对应网站2：ai智能空间react版   http://react.aiplat.com 
 - 实例相对应网站3：ai智能空间nervjs版  http://nerv.aiplat.com 

---

# 代码目录结构

### 习惯vue后，改为与vueapp类似(https://github.com/womendi/vueapp)
 - config          ------environment配置目录
 - dist            ------npm run build后实际布署代码目录
 - e2e             ------e2e目录(有关e2e暂时未改)
 - src             ------代码主体目录
 - --- assets      ------静态css、images、less文件目录
 - --- components  ------公共组件目录
 - --- plugins     ------公共函数或插件目录
 - --- routes      ------路由配置目录
 - --- views       ------路由对应页面视图目录
 - --- index.html  ------单页面应用公共html入口文件
 - --- main.ts     ------应用入口文件
 - --- polyfills.ts  ------Browser polyfills & Application imports
 - --- test.ts       ------有关test暂时未改
 - .angular-cli.json ------angular-cli配置
 - tsconfig.json     ------ts编译配置
 - tslint.json       ------ts规则配置
 - webpack.config.js ------webpack打包配置

---

# clone
 - $ git clone https://github.com/womendi/angular-app.git

# 安装依赖
 - $ cd angular-app
 - $ npm install

# 开发模式

### 开发模式(热更新代码，自动刷新页面)
 - $ npm run dev  或  npm start

### 最后看到以下这句 表示webpack编译成功
 - webpack: Compiled successfully.
 - 打开 http://本地ip:3009，方便手机在局域网访问

# 打包项目
 - $ npm run build
 - 整个项目代码打包到dist目录,已启用Gzip压缩，打开其中index.html就是项目 首页

# tslint 
 - $ npm run tslint  (查看)

---

# 布署服务器(nginx) http://nginx.org/
 - 直接将npm run build后dist目录中文件放在服务器根目录
 - 若./src/main.js设置的是HashRouter，无需以下一条设置就可以正常运行网站
 - 若./src/main.js设置的是BrowserRouter并且是nginx服务器,设置nginx.conf如下：
    server {
        ...
            location / {
                root   BrowserHtml;
                index  index.html index.htm;
                try_files $uri /index.html;
            }
        ...
    }
    就是在 location / {} 中添加 一句：try_files $uri /index.html;

---

# 命令替换

### 可用cnpm代替npm
 - $ npm install -g cnpm --registry=https://registry.npm.taobao.org
 - 然后所有npm * 可用 cnpm *代替 
 - 例如 cnpm install 、cnpm install -g ** 、cnpm install --save-dev **

### 可用yarn代替npm
 - 然后所有npm * 可用 yarn具体代码代替 
 - 例如 yarn或yarn install 、yarn add **、 yarn add ** --dev

---

# 兼容性
 - PC端：使用最新react，不兼容IE8。不使用最新react，兼容IE8。
 - 手机端兼容安卓与ios等等各种系统，不区分机型
 - 兼容一切可联网设备，比如TV等等,不区分尺寸大小