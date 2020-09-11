import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharacterProfileComponent } from './pages/character-profile/character-profile.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';

const routes: Routes = [
    {
      path: '', component: CharactersComponent,  children: [
      { path: 'profile/:id', component: CharacterProfileComponent },
      { path: 'list', component: CharacterListComponent },
      { path: '**', component: NotFoundComponent }
      ]
    }
  ]
;


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
