import { Component, Input } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.models';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character!: CharacterDTO;
}
