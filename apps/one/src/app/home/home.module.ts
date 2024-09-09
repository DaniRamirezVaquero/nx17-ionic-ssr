import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { MylibComponent } from '@nx17-ionic-ssr/mylib';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MyComponentComponent } from "../../../../../mylib/src/lib/my-component/my-component.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    MylibComponent,
    MyComponentComponent
],
  declarations: [HomePage],
})
export class HomePageModule {}


/*libs/mylib/src/lib/mylib.module.ts*/