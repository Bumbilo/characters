import {ComponentFixture, TestBed} from '@angular/core/testing';
import {mockListCharacterData} from '../../shared/constants/constants';
import {CharacterProfileInfoComponent} from './character-profile-info.component';

describe('CharacterProfileInfoComponent', () => {
  let component: CharacterProfileInfoComponent;
  let fixture: ComponentFixture<CharacterProfileInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterProfileInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterProfileInfoComponent);
    component = fixture.componentInstance;
    component.character = mockListCharacterData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be correct elements', () => {
    const characterProfileInfoeEl: HTMLElement = fixture.nativeElement;
    const characterProfileInfoFields = characterProfileInfoeEl.querySelectorAll('.card-field');
    expect(characterProfileInfoFields.length).toBe(8);
  });

  it('should be correct data', () => {
    const characterProfileInfoeEl: HTMLElement = fixture.nativeElement;
    const characterProfileInfo = characterProfileInfoeEl.querySelector('.card-title');
    const characterProfileInfoFields = characterProfileInfoeEl.querySelectorAll('.card-field');

    const listOfValues = Array.from(characterProfileInfoFields).map(value => value.textContent.trim());
    expect(listOfValues.includes(mockListCharacterData.name)).toBe(true);
    expect(characterProfileInfo).toBeTruthy();
  });

});
