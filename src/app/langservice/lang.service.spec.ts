import { TestBed, inject } from '@angular/core/testing';

import { LangService } from './lang.service';

describe('LangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LangService.LangService]
    });
  });

  it('should be created', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    expect(service).toBeTruthy();
  }));

  it('should default to English', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    expect(service.get()).toEqual(LangService.Language.English);
  }));

  it('should return string `English`', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    expect(service.getString()).toEqual('English');
  }));

  it('should switch to Español', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    service.set(LangService.Language.Español);
    expect(service.get()).toEqual(LangService.Language.Español);
  }));

  it('should return string `Español`', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    service.set(LangService.Language.Español);
    expect(service.getString()).toEqual('Español');
  }));

  it('should switch to Español from string', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    service.setString('Español');
    expect(service.get()).toEqual(LangService.Language.Español);
  }));

  it('should toggle from English to Español', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    service.toggle();
    expect(service.get()).toEqual(LangService.Language.Español);
  }));

  it('should toggle from Español to English', inject([LangService.LangService],
        (service: LangService.LangService ) => {
    service.set(LangService.Language.Español);
    service.toggle();
    expect(service.get()).toEqual(LangService.Language.English);
  }));
});
