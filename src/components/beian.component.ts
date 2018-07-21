import { Component } from '@angular/core'

@Component({
  selector: 'app-beian',
  templateUrl: './beian.component.html'
})
export class Beian {
  site = {}
  constructor() {
    this.site = {
      site: 'aiplat.com',
      url: 'http://www.aiplat.com'
    }
  }
}
