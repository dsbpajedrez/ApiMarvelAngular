import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {Character} from "../models/character.models"
import { environment } from 'src/enviroments/enviroment.prod';
import { map, Observable, retry, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get<Character>(environment.baseUrlAPI)
        .pipe(
          retry(2),
          tap(response => response.data.results),
          map(response => response.data.results.map(item =>({
            ...item
          }))
        ))
  }
}
