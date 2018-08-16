import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { LangService } from '../langservice/lang.service';
import { Serializable } from '../utilities/serializable';
import { FromJSON } from '../utilities/from-json';

class Job extends Serializable {
  public title: string;
  public fromDate: Date;
  public company: string;
  public description: string;

  constructor(public toDate?: Date) {
    super();
  }
}

class ExperienceVM extends Serializable {
  public title: string;
  public since: string;
  public jobs: Job[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent extends FromJSON implements OnInit {

  constructor(http: Http, lang: LangService.LangService ) {
    super(http, lang, 'app/experience/experience.model.json', new ExperienceVM());
  }

  since(lang?) {
    if (lang == null) { lang = this.lang.getString(); }
    (<ExperienceVM>this.vm).since = lang === 'English' ? 'Since' : 'Desde';
  }

  ngOnInit() {
    this.since();
    this.lang.getEmitter().subscribe((data) => this.since(data));
    super.ngOnInit();
  }

}
