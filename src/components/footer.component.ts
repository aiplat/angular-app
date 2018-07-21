import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class Footer {
  @Input('footData') footData: any
  menuList = []
  constructor() {
    this.menuList = [
      { name: '首页', url: '/', img: 'assets/images/footer/sy_01.png', imgOn: 'assets/images/footer/sy_01on.png' },
      { name: '应用展示', url: '/apps.html', img: 'assets/images/footer/sy_03.png', imgOn: 'assets/images/footer/sy_03on.png' },
      { name: '捐赠我们', url: '/donate.html', img: 'assets/images/footer/sy_04.png', imgOn: 'assets/images/footer/sy_04on.png' }
    ]
  }
}
