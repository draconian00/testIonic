import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [InAppBrowser]
})
export class HomePage implements OnInit {
  platform: any;

  static get parameters() {
    return [[Platform]];
  }

  constructor(
    private navController: NavController,
    platform: Platform) {
      this.platform = platform;
      // console.log(this.platform);
  }

  launch(url) {
    console.log('call launch function');
    console.log(url, typeof(url));
    // this.platform.ready().then(() => {
    InAppBrowser.open(url, "_blank", "location=no,toolbar=no");
    // })
    // InAppBrowser.open('http://www.naver.com');
  }

  ngOnInit() {
    // InAppBrowser.open("http://m.naver.com", "_system", "location=true");
  }
}



// import {Platform, Page} from 'ionic-framework/ionic';
 
 
// @Page({
//     templateUrl: 'build/pages/home/home.html'
// })
// export class HomePage {
 
//     static get parameters() {
//         return [[Platform]];
//     }
 
//     constructor(platform) {
//         this.platform = platform;
//     }
 
//     launch(url) {
//         this.platform.ready().then(() => {
//             cordova.InAppBrowser.open(url, "_system", "location=true");
//         });
//     }
// }