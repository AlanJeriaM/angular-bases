import { Character } from './../interface/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';



@Injectable(
  {providedIn: 'root'
  })


export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500,
  }];


  addCharacter(character: Character):void{

    const newCharacter: Character = {id: uuid(), ...character}; // toma todas las propiedas de Character y esparcelas en el objeto que esta creado newCharacter en la propiedad id, esto es mucho mejor que desestructurar por que si tuvieramos mas propiedades seria dificil de manejarlas todas.

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id  );
  }

}
