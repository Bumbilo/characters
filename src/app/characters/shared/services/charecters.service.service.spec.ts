import {TestBed} from '@angular/core/testing';

import {CharectersService} from './charecters.service';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('Charecters.ServiceService', () => {
  let service: CharectersService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientJsonpModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [CharectersService]
    });
    service = TestBed.inject(CharectersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be called', () => {
    spyOn(service, 'getCharacters').and.callThrough();

    service.getCharacters().subscribe(item => {
      expect(item.length).toBe(20, 'should be 20 record');
    });

    expect(service.getCharacters).toHaveBeenCalled();
  });
});
