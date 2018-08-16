import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Serializable } from '../utilities/serializable';
import { LangService } from '../langservice/lang.service';
import { FromJSON } from '../utilities/from-json'

class HeroVM extends Serializable {
  public title: string;
  public messages: string[];
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent extends FromJSON {

  constructor(http: Http, lang: LangService.LangService) {
    super(http, lang, 'app/hero/hero.model.json', new HeroVM());
  }

}
