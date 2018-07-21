import { Component, ViewChild } from '@angular/core';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';

import { Header } from '../../components/header.component'
import { Footer } from '../../components/footer.component'
import { Beian } from '../../components/beian.component'

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html'
})

export class Apps {
  @ViewChild('header')
  header: Header;
  headData = { title: '应用展示', isImgL: false };
  @ViewChild('footer')
  footer: Footer;
  footData = { menuList: [], path: '' };
  @ViewChild('beian')
  beian: Beian;
  title = 'apps';
  icon = 'assets/images/commons/metro_icon.png';
  indexData = [
    {
      name: '亲信地铁',
      arr: [
        { name: '跨平台网址-webApp', url: 'http://m.aiplat.com/metro', market: '' },
        {
          name: '安卓App下载',
          url: 'http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5',
          market: '腾讯应用宝'
        },
        {
          name: '苹果App下载',
          url: 'https://itunes.apple.com/cn/app/id1254451008',
          market: 'appstore'
        }
      ]
    },
    {
      name: '娱乐计分器',
      arr: [
        { name: '微信小程序-搜索‘娱乐计分器’', url: 'weixin://', market: '' }
      ]
    },
    {
      name: 'AI智能空间',
      arr: [
        {
          name: '单页面vue版',
          url: 'http://www.aiplat.com',
          market: ''
        },
        {
          name: '单页面react版',
          url: 'http://react.aiplat.com',
          market: ''
        },
        {
          name: '单页面angular版',
          url: 'http://ajs.aiplat.com',
          market: ''
        },
        {
          name: '多页面nervjs版',
          url: 'http://nerv.aiplat.com',
          market: ''
        }
      ]
    }
  ]
  constructor(router: Router) {
    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    this.footData.path = snapshot.url;
  }
}
