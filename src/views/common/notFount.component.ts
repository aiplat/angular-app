import { Component, ViewChild } from '@angular/core';

import { Header } from '../../components/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './notFount.component.html'
})
export class NotFount {
  @ViewChild('header')
  header: Header;
  headData = { title: '404', isImgL: true };
  description = '你居然迷路了!'
}
