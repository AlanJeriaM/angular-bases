import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name: 'ABC',
    power: 12
  };

  emitCharacter(){
    console.log(this.character);

    if (this.character.name.length === 0 ) return; //para no dejar el recuadro name vacio

    this.onNewCharacter.emit({...this.character});

    this.character.name= '';
    this.character.power= 0;
  }

}
