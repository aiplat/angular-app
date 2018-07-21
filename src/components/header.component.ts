import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class Header implements OnInit {
  @Input('headData') headData: any;
  images = { imgL: 'assets/images/commons/cm_back2.png' };
  constructor() {
    
  }
  toBack(): void {
    window.history.go(-1);
  }
  ngOnInit(): void {
    document.title = this.headData.title + '-angular-app';
  }
}

/*

引用组件

*.ts

import { Component,ViewChild } from '@angular/core';

import {Header} from '../../components/header.component'


@ViewChild('header')
  header:Header;
  headData = {title:'404',isImgL:true};

*.html

<app-header [headData]='headData'></app-header>

  */
