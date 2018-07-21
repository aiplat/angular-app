import { Component, ViewChild, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';

import { Header } from '../../components/header.component'
import { Footer } from '../../components/footer.component'
import { Beian } from '../../components/beian.component'


@Component({
  selector: 'app-root',
  templateUrl: './index.component.html'
})
export class Index implements OnInit, OnChanges, DoCheck {
  @ViewChild('header')
  header: Header;
  headData = { title: '首页', isImgL: false };
  @ViewChild('footer')
  footer: Footer;
  footData = { menuList: [], path: '' };
  @ViewChild('beian')
  beian: Beian;
  title = 'index';
  indexData = {
    description: 'AI智能空间,拥抱人工智能,明天会更好。个人项目:跨平台app~《亲信地铁》、小程序~《娱乐计分器》。技术研究潜心使用各种框架开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致。详见应用展示。',
    gitName: '我的github',
    gitUrl: 'github.com/womendi',
    gitUrl2: 'https://github.com/womendi',
    gitList: [{
      name: 'cmui',
      desc: '自己写的跨平台css3框架',
      url: 'https://github.com/womendi/cmui'
    }, {
      name: 'vueapp',
      desc: '改写vue-cli的跨平台框架',
      url: 'https://github.com/womendi/vueapp'
    }, {
      name: 'react-app-ie8',
      desc: '改写react兼容IE8的跨平台框架',
      url: 'https://github.com/womendi/react-app-ie8'
    }, {
      name: 'angular-app',
      desc: '改写angular-cli的跨平台框架',
      url: 'https://github.com/womendi/angular-app'
    }, {
      name: 'express-multipage',
      desc: '改写express的多页面框架',
      url: 'https://github.com/womendi/express-multipage'
    }, {
      name: 'nervjs-ie8',
      desc: '改写nervjs兼容IE8的多页面框架',
      url: 'https://github.com/womendi/nervjs-ie8'
    }, {
      name: 'reactNative',
      desc: '改写reactNative的APP框架',
      url: 'https://github.com/womendi/reactNative'
    }],
    cooperation: '联系我',
    email: 'womendi@qq.com'
  };
  icon = 'assets/images/icon.png';
  constructor(public router: Router) {
    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    this.footData.path = snapshot.url;
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnChanges(): void {
    console.log('ngOnChanges')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  toTitle(): void {
    this.router.navigate(['/mine/log']);
  }
  toEmail() {
    return 'mailto:' + this.indexData.email
  }
}
