import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Results } from '../results/results';

/**
 * Generated class for the History page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class History {

  tests: any = [];
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
    this.tests = JSON.parse(window.localStorage.getItem("tests"));
    console.log(this.tests);
  }
  
  goToResult(test){
    this.navCtrl.push(Results, {
      test: test,
      showHome: false
    });
  }

}
