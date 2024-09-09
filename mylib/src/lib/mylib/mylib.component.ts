import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from '../my-component/my-component.component';

@Component({
  selector: 'lib-mylib',
  standalone: true,
  imports: [
    CommonModule,
    MyComponentComponent
  ],
  templateUrl: './mylib.component.html',
  styleUrl: './mylib.component.css',
})
export class MylibComponent {}
