import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { HttpModule } from '@angular/http';
import { LangService } from '../langservice/lang.service';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceComponent ],
      imports: [ HttpModule ],
      providers: [ LangService.LangService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
