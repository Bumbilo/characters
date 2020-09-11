import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotFoundComponent} from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    const logoMessageEl: HTMLElement = fixture.nativeElement;
    const h1 = logoMessageEl.querySelector('h1');
    expect(h1.textContent).toContain('Page is not found');
  });

  it('should have correct description', () => {
    const notFoundEl: HTMLElement = fixture.nativeElement;
    const h1 = notFoundEl.querySelector('h1');
    const p = notFoundEl.querySelector('p');
    expect(h1.textContent).toContain('Page is not found');
    expect(p.textContent).toContain('Go to List page !!!');
  });
});
