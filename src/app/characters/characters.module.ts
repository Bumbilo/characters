import { CharactersRoutingModule } from './characters-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CharactersComponent } from './characters.component';
import { CharectersService } from './shared/services/charecters.service';
import { CharacterProfileComponent } from './pages/character-profile/character-profile.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';
import { CharacterProfileInfoComponent } from './components/character-profile-info/character-profile-info.component';
import { CharacterEpisodesComponent } from './components/character-episodes/character-episodes.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent,
    CharacterProfileComponent,
    CharacterCardComponent,
    CharacterFilterComponent,
    CharacterProfileInfoComponent,
    CharacterEpisodesComponent,
    ],
  exports: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, FormsModule],
  providers: [CharectersService]
})
export class CharactersModule {
}
