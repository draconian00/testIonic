import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  constructor(private navController: NavController) {
  }
}


// import {SafariViewController} from 'ionic-native';

// SafariViewController.isAvailable()
//   .then(
//     (available) => {
//       if(available){

//         SafariViewController.show({
//           url: 'http://ionic.io',
//           hidden: false,
//           animated: false,
//           transition: 'curl',
//           enterReaderModeIfAvailable: true,
//           tintColor: '#ff0000'
//         })
//         .then(
//           (result: any) => {
//             if(result.event === 'opened') console.log("Opened");
//             else if(result.event === 'loaded') console.log("Loaded");
//             else if(result.event === 'closed') console.log("Closed");
//           },
//           (error: any) => console.error(error)
//         );

//       } else {
//         // use fallback browser, example InAppBrowser
//       }
//     }
//   );