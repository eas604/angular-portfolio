import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Serializable } from '../utilities/serializable';
import { LangService } from '../langservice/lang.service';
import { FromJSON } from '../utilities/from-json'

class AboutVM extends Serializable {
    public title: string;
    public messages: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends FromJSON {

  constructor(http: Http, lang: LangService.LangService) {
    super(http, lang, 'app/about/about.model.json', new AboutVM());
  }

  /**
   * Returns the view model for the About component
   * @returns AboutVM the view model for the About component
   * @memberof AboutComponent
   */
  getVM(): AboutVM {
    return <AboutVM>this.vm;
  }

}
