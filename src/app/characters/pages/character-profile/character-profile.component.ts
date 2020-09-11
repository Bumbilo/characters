import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, forkJoin} from 'rxjs';
import {CharectersService} from '../../shared/services/charecters.service';
import {Character} from './../../shared/models/character.model';
import {ActivatedRoute, Params} from '@angular/router';
import {mergeMap,} from 'rxjs/operators';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss']
})
export class CharacterProfileComponent implements OnInit, OnDestroy {
  characterSubscription: Subscription;
  character: Character;
  episodes: string[];

  constructor(private charectersService: CharectersService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.characterSubscription = this.activateRoute.params.pipe(
      mergeMap((params: Params) => this.charectersService.getCharacterById(params.id)),
      mergeMap((character: Character) => {
        this.character = character;
        return forkJoin(character.episode.map((episode: string) => this.charectersService.getEpisodeById(episode)));
      })
    ).subscribe((episodes: string[]) => this.episodes = episodes);
  }

  ngOnDestroy(): void {
    if (this.characterSubscription) {
      this.characterSubscription.unsubscribe();
    }
  }

}
