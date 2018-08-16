import { Injectable, EventEmitter } from '@angular/core';
import { Utilities } from '../utilities/utilities'

export module LangService {

  /**
   * Language enumeration. Enum names are the native language names.
   *
   * @export
   * @enum {number}
   */
  export enum Language {
      English,
      Español
    }

  /**
   * Service provide and set a Language.
   *
   * @export
   * @class LangService
   */
  @Injectable()
  export class LangService {
    private _lang: Language = Language.English;
    private _emitter: EventEmitter<Language> = new EventEmitter<Language>();

    constructor() { }

    /** get the current language */
    get(): Language {
      return this._lang;
    }
    /** get the current language as string */
    getString(): string {
      return Utilities.enumToString(this._lang, Language);
    }
    /** get the current language as string */
    getStringAsync(): Promise<string> {
      return Promise.resolve(this.getString());
    }
    getEmitter(): EventEmitter<Language> {
      return this._emitter;
    }
    emit() {
      this._emitter.emit(this._lang);
    }
    /**
     * set the current language
     *
     * @param {Language} lang the language to set
     * @memberof LangService
     */
    set(lang: Language) {
      this._lang = lang;
      this.emit()
    }
    /**
     * set language matching provided string
     *
     * @param {string} lang the name of the language to set
     * @memberof LangService
     */
    setString(lang: string) {
      switch (lang) {
        case Utilities.enumToString(Language.English, Language):
          this._lang = Language.English;
          break;
        case Utilities.enumToString(Language.Español, Language):
          this._lang = Language.Español;
          break;
      }
      this.emit();
    }
    /** toggle between the two available languages */
    toggle() {
      // Since I only plan on knowing two spoken languages for the forseeable
      // future, I´ll forgive my self this kludge.
      this._lang = this._lang === Language.English ?
          Language.Español : Language.English;
      this.emit();
    }

  }

}
