import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';
import { CopyDirective } from '../directive/copy.directive';


@NgModule({
  declarations: [
    TypographyComponent,
    CopyDirective
  ],
  imports: [
    CommonModule,
    TypographyRoutingModule
  ]
})
export class TypographyModule { }
