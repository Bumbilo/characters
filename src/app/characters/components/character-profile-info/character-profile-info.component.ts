import {Component, Input} from '@angular/core';
import {Character} from '../../shared/models/character.model';

@Component({
  selector: 'app-character-profile-info',
  templateUrl: './character-profile-info.component.html',
  styleUrls: ['./character-profile-info.component.scss']
})
export class CharacterProfileInfoComponent {
  @Input() character: Character;
}
