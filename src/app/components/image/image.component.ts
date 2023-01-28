import { Component, Input } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.models';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
@Input() image!: CharacterDTO;
}
