import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {Character} from "../models/character.models"
import { environment } from 'src/environments/environment.prod';
import { map, Observable, retry, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(offset:string){
    return this.http.get<Character>(environment.baseUrlAPI+"&limit="+offset)
        .pipe(
          retry(2),
          tap(response => response.data.results),
          map(response => response.data.results.map(item =>({
            ...item
          }))
        ))
  }
}
