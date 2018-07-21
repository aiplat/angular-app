import { Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { NotFount } from '../views/common/notFount.component'

import { Index } from '../views/index/index.component'
import { Apps } from '../views/apps/index.component'
import { Donate } from '../views/donate/index.component'

// 路由配置
const routes: Routes = [
  { path: '', component: Index },
  { path: 'index', pathMatch: 'full', redirectTo: '/' },
  { path: 'index.htm', pathMatch: 'full', redirectTo: '/' },
  { path: 'index.html', pathMatch: 'full', redirectTo: '/' },
  { path: 'apps.html', component: Apps },
  { path: 'donate.html', component: Donate },
  { path: '404', component: NotFount },
  { path: '**', redirectTo: '/404' },
];

const Declarations = [AppComponent];
routes.forEach((item) => {
  if (item.component) {
    Declarations.push(item.component)
  }
})

// 组件注册
import { Header } from '../components/header.component'
Declarations.push(Header)

import { Footer } from '../components/footer.component'
Declarations.push(Footer)

import { Beian } from '../components/beian.component'
Declarations.push(Beian)

export const Aiplat = {
  routes: routes,
  Declarations: Declarations
}
