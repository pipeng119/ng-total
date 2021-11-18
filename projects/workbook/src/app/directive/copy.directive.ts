import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {

  @Input() public copyTxt: string = '';

  private _document: any;

  private _textarea: HTMLTextAreaElement | undefined;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) readonly document: any) {
    this._document = document;
    this.createTextarea();
    const hostEl: HTMLElement = this.el.nativeElement;
    const $i = document.createElement('i');
    $i.innerHTML = 'icon';
    $i.addEventListener('click', this.copy.bind(this))
    el.nativeElement.append($i);
  }

  private createTextarea(): void {
    const textarea = (this._textarea = this._document.createElement('textarea'));
    const styles = textarea.style;
    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', true);
    this._document.body.appendChild(textarea);
  }

  private copy(): boolean {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement as HTMLOrSVGElement | null;
        textarea.value = this.copyTxt;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');

        if (currentFocus) {
          currentFocus.focus();
        }
      }

    } catch (err) {

    }
    return successful;
  }

}
