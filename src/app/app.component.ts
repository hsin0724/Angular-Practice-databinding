import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : any;
  btnDisabled = true;
  btnDisabled2 = true;
  creatName = false;
  textColor : any;
  textColor2 = 'blue';
  name : string;
  typetext : string;
  typetext2 : string;
  serverName :'test';
  servers = ['test','test2'];
  links = [
    { linkName: 'home'
    },
    { linkName: 'about us'
    },
    { linkName: 'news'
    },
    { linkName: 'contact us'
    }
  ];

  constructor() {
    this.textColor = {
      'background-color':'yellow',
      'color':'red'
    }
    // 判斷Math.random()方法隨機生成一個0~1之間的數值是否 > 0.5
    // 是的話name == maya , 否的話name == kuro
    this.name = Math.random() > 0.5 ? 'maya' : 'kuro';
  }

  getInputValue(event :Event) {
    console.log(event);
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username != ''){
      this.btnDisabled = false;
      this.btnDisabled2 = false;
    }else{
      this.btnDisabled = true;
      this.btnDisabled2 = true;
    }
  }

  clearUseName() {
    this.username = '';
    this.btnDisabled = true;
    this.btnDisabled2 = true;
    this.creatName = false;
  }

  creatUseName() {
    this.creatName = true;
    this.btnDisabled2 = true;
  }

  getColor() {
    // 判斷name 是否===maya，是的話回傳greem,不是的話回傳red
    return this.name === 'maya' ? 'green' : 'red';
  }

  creatServe() {
    this.servers.push(this.serverName);
  }
}

