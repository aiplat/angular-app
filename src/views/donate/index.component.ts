import { Component, ViewChild } from '@angular/core';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';

import { Header } from '../../components/header.component'
import { Footer } from '../../components/footer.component'
import { Beian } from '../../components/beian.component'

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html'
})
export class Donate {
  @ViewChild('header')
  header: Header;
  headData = { title: '捐赠我们', isImgL: false };
  @ViewChild('footer')
  footer: Footer;
  footData = { menuList: [], path: '' };
  @ViewChild('beian')
  beian: Beian;
  title = 'donate';
  indexData = {
    desc: '非常感谢各位对ai智能空间的无偿捐赠,ai智能空间将会持续开发更多更好的应用。',
    about: '特别说明:以下收款二维码仅在全球唯一网站aiplat.com有效,对于全球其他地方或网站出现的均是假冒的。',
    dnarr: [
      {
        name: '微信收款',
        img: 'assets/images/index/donateWX.png'
      },
      {
        name: '支付宝收款',
        img: 'assets/images/index/donateZFB.png'
      }
    ]
  }
  dnid = 0;
  constructor(router: Router) {
    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    this.footData.path = snapshot.url;
  }
  tsone(id) {
    this.dnid = id
  }
}
