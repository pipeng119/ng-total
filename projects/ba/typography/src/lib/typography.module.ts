import { NgModule } from '@angular/core';
import { BaCopyDirective } from './ba-copy.directive';
import { TextCopyComponent } from './text-copy/text-copy.component';
import { TypographyComponent } from './typography/typography.component';



@NgModule({
  declarations: [
    BaCopyDirective,
    TextCopyComponent,
    TypographyComponent
  ],
  imports: [
  ],
  exports: [
    BaCopyDirective,
    TextCopyComponent,
    TypographyComponent
  ]
})
export class TypographyModule { }
