import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterProfileComponent} from './character-profile.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {of} from 'rxjs';

import {CharacterEpisodesComponent} from '../../components/character-episodes/character-episodes.component';
import {CharacterProfileInfoComponent} from '../../components/character-profile-info/character-profile-info.component';
import {mockListOfCharactersData, mockListCharacterData, mockEpisodeData} from '../../shared/constants/constants';
import {CharectersService} from '../../shared/services/charecters.service';

describe('CharacterProfileComponent', () => {
  let component: CharacterProfileComponent;
  let fixture: ComponentFixture<CharacterProfileComponent>;
  let service: CharectersService;

  const appServiceSpy = jasmine.createSpyObj('CharectersService', {
    getCharacters: of(mockListOfCharactersData),
    getCharacterById: of(mockListCharacterData),
    getEpisodeById: of(mockEpisodeData)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        RouterTestingModule
      ],
      providers: [{provide: CharectersService, useValue: appServiceSpy}],
      declarations: [CharacterProfileComponent, CharacterEpisodesComponent, CharacterProfileInfoComponent]
    }).compileComponents();

    service = TestBed.inject(CharectersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be correct elements', () => {
    const characterProfileEl: HTMLElement = fixture.nativeElement;
    const characterProfileInfo = characterProfileEl.querySelector('app-character-profile-info');
    const characterEpisodes = characterProfileEl.querySelector('app-character-episodes');
    expect(characterProfileInfo).toBeTruthy();
    expect(characterEpisodes).toBeTruthy();
  });

  it('should rise CharacterProfileComponent values', () => {
    expect(service.getCharacterById).toHaveBeenCalled();
    expect(service.getEpisodeById).toHaveBeenCalled();
    expect(component.episodes.length).toBe(5, 'Should be 5 episodes');
    expect(component.episodes[0]).toEqual(mockEpisodeData);
    expect(component.character).toEqual(mockListCharacterData);
  });
});
