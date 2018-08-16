import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
// import { Serializable } from './utilities/serializable';
import { LangService } from './langservice/lang.service';
import { HeroComponent } from './hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroComponent,
    ExperienceComponent,
    // Serializable
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
      HttpModule,
      LangService.LangService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private _langSvc: LangService.LangService;

  constructor(private langSvc: LangService.LangService) {
    this._langSvc = langSvc;
  }
}
