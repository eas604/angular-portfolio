import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { LangService } from './langservice/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']// ,
  // providers: []
})
export class AppComponent {
  title = 'Edwin Sheldon\'s Portfolio';

  constructor(private titleService: Title) {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string) {
    this.title = newTitle;
    this.titleService.setTitle(newTitle);
  }
  /*
  private _langSvc: LangService.LangService;

  constructor(private langSvc: LangService.LangService) {
    this._langSvc = langSvc;
  }
  */
}
