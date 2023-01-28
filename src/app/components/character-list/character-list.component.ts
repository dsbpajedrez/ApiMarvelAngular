import { Component, Input, OnInit } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.models';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{
  @Input() characters: CharacterDTO[] = []
constructor(private characterService: CharacterService){}
 mostrarMas:number =21;
  ngOnInit(): void {
    this.characterService.getAllCharacters(this.mostrarMas.toString())
      .subscribe({
        next: data => {
          this.characters = data;
        },
        error : error => console.log(error)
        
      })
  }

  masContenido = () =>{
    this.mostrarMas+=3;
    this.characterService.getAllCharacters(this.mostrarMas.toString())
      .subscribe({
        next:data => {
          this.characters=[]
          return this.characters = this.characters.concat(data)
        }
      }
        )
    }

}
