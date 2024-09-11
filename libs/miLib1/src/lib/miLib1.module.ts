import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatataComponent } from './patata/patata.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PatataComponent],
  exports: [PatataComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class MiLib1Module {}
