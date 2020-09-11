import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterListComponent} from './character-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';

import {CharectersService} from '../../shared/services/charecters.service';
import {CharacterProfileComponent} from '../character-profile/character-profile.component';
import {CharacterCardComponent} from '../../components/character-card/character-card.component';
import {mockListOfCharactersData, mockListCharacterData, mockEpisodeData} from '../../shared/constants/constants';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
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
        RouterTestingModule
      ],
      providers: [{provide: CharectersService, useValue: appServiceSpy}],
      declarations: [CharacterProfileComponent, CharacterCardComponent]
    })
      .compileComponents();
    service = TestBed.inject(CharectersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correct elements', () => {
    const characterListEl: HTMLElement = fixture.nativeElement;
    const characterFilter = characterListEl.querySelector('app-character-filter');
    expect(characterFilter).toBeTruthy();
  });

  it('should rise CharacterListComponent values', () => {
    expect(component.characters).not.toBeUndefined();
    expect(component.filteredCharacters).not.toBeUndefined();
    expect(component.sortFlag).toBe(false);
    expect(component.characters).toEqual(mockListOfCharactersData);
  });
});
