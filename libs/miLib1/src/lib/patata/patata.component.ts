import { Component } from '@angular/core';
import { PhotoService } from '@services';


@Component({
  selector: 'lib-patata',
  templateUrl: './patata.component.html',
  styleUrl: './patata.component.scss',
})
export class PatataComponent {

  constructor(private photoService: PhotoService) {}

  public async addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
