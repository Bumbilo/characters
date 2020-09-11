import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-character-episodes',
  templateUrl: './character-episodes.component.html',
})
export class CharacterEpisodesComponent {
  @Input() episodes;
  titles = [
    {title: '#'},
    {title: 'Episodes'},
    {title: 'Name'},
    {title: 'Air date'},
    {title: 'Record created'},
  ];
}
