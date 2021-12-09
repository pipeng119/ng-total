import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-text-copy',
  templateUrl: './text-copy.component.html',
  styleUrls: ['./text-copy.component.css']
})
export class TextCopyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void{
    console.log('copy')
  }

}
