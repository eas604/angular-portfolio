import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, HttpModule, ConnectionBackend, RequestOptions } from '@angular/http';

import { AboutComponent } from './about.component';
import { LangService } from '../langservice/lang.service';
import { Serializable } from '../utilities/serializable';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  const mockResponse = `{
      "English": {
        "title": "The Kingkiller Chronicle",
        "messages": [
          "The Name of the Wind",
          "Wise Man's Fear",
          "The Doors of Stone"
        ]
      },
      "Español": {
        "title": "Crónica del Asesino de Reyes",
        "messages": [
          "El nombre del viento",
          "El temor de un hombre sabio",
          "Las puertas de piedra"
        ]
      }
    }`;

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
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('should instantiate from JSON', () => {

  // });
});
