import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about.component';
import { LangService } from '../langservice/lang.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [HttpModule],
      providers: [LangService.LangService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an English title `About`', () => {
    fixture.whenStable().then(() => {
      const vm = component.getVM();
      expect(vm.title).toBe('About');
    });
  });

  it('should have an English h2 `About`', () => {
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('h2').innerHTML).toBe('About');
    });
  });

  it('should have three messages', () => {
    fixture.whenStable().then(() => {
      const vm = component.getVM();
      expect(vm.messages.length).toBe(3);
    });
  });

});
