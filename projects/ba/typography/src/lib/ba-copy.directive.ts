import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: `
  [baCopy],
  bacopy
  `
})
export class BaCopyDirective {

  private _document: any;

  constructor(
    @Inject(DOCUMENT) readonly document: any,
    private hootEl: ElementRef
  ) {
    console.log('this directive is running')
    this._document = document;
    // setTimeout(() => this.createIcon())
    this.createIcon();
  }

  private createIcon(): void {
    const spanEl: HTMLSpanElement = this._document.createElement(`span`);
    spanEl.innerHTML = `<svg t="1637228957862" class="icon" width="20" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="954" width="200" height="200"><path d="M682.666667 341.333333h128v469.333334H341.333333v-128H213.333333V213.333333h469.333334v128z m0 85.333334v256h-256v42.666666h298.666666v-298.666666h-42.666666zM298.666667 298.666667v298.666666h298.666666V298.666667H298.666667z" fill="#444444" p-id="955"></path></svg>`
    this.hootEl.nativeElement.append(spanEl);
  }
}
