import {Character} from './../../shared/models/character.model';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {CharectersService} from '../../shared/services/charecters.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit, OnDestroy {
  private characterSubscription: Subscription;
  characters: Character[];
  filteredCharacters: Character[];
  sortFlag = false;

  constructor(private charecterService: CharectersService) {
  }

  ngOnInit(): void {
    this.characterSubscription =
      this.charecterService.getCharacters()
        .subscribe((characters: Character[]) => {
          this.characters = characters;
          this.setOriginalCharacters();
        });
  }

  setOriginalCharacters(): void {
    this.filteredCharacters = this.characters.slice();
  }

  handleFilterApply({status, gender, name = ''}): void {
    this.setOriginalCharacters();
    this.filteredCharacters = this.filteredCharacters
      .filter(filter => gender.length ? gender.indexOf(filter.gender) !== -1 : filter)
      .filter(filter => status.length ? status.indexOf(filter.status) !== -1 : filter)
      .filter(filter => name.length ? filter.name.indexOf(name) !== -1 : filter);
  }

  handleFilterCancel(): void {
    this.setOriginalCharacters();
  }

  handleSortByName(): void {
    if (!this.sortFlag) {
      this.filteredCharacters.sort((a, b) => {
        this.sortFlag = true;
        return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
      });
    } else {
      this.sortFlag = false;
      this.filteredCharacters = this.filteredCharacters.reverse();
    }
  }

  ngOnDestroy(): void {
    if (this.characterSubscription) {
      this.characterSubscription.unsubscribe();
    }
  }
}
