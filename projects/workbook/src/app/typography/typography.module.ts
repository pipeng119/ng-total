import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';
import { CopyDirective } from '../directive/copy.directive';
import { TypographyModule as TypographyLibModule } from '../../../../ba/typography/src/lib/typography.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [TypographyComponent, CopyDirective],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    NzTypographyModule,
    TypographyRoutingModule,
    TypographyLibModule,
    ClipboardModule,
    NzCarouselModule
  ],
})
export class TypographyModule {}
