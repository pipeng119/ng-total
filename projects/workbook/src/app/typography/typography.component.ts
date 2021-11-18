import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  public _document: any;
  public testStr = '文字';
  constructor(@Inject(DOCUMENT) document: any) {
    this._document = document;
  }

  ngOnInit(): void {
    console.log(this._document)
  }

}
