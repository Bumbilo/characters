import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharactersComponent} from './characters.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CharactersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const characterEl: HTMLElement = fixture.nativeElement;
    const router = characterEl.querySelector('router-outlet');
    expect(router).toBeTruthy();
  });
});
