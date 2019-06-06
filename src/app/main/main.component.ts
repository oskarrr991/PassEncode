import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }
  coded: any;
  ngOnInit() {
  }

  converter(value: string) {
    const md5 = new Md5();
    this.coded = md5.appendStr(value).end();
  }
}
