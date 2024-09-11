import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatataComponent } from './patata/patata.component';
import { PhotoService } from '@services';


@NgModule({
  imports: [CommonModule],
  declarations: [PatataComponent],
  exports: [PatataComponent],
  providers: [
    {
    provide: 'photoService',
    useFactory: PhotoService
  }
],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class MiLib1Module {}
