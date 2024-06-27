import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //characterList es la propiedad de nuestro que arreglo que utilizaremos en el ngFor del html de listComponent.
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{

    if( !id ) return;


   this.onDelete.emit(id);
  }

}
