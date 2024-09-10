import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatataComponent } from './patata/patata.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PatataComponent],
  exports: [PatataComponent]
})
export class MiLib1Module {}
