import { OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { LangService } from '../langservice/lang.service'
import { Serializable } from './serializable'

/**
 * A class that allows itself to be instantiated from a JSON model.
 * Intended to be extended by other classes.
 *
 * @export
 * @class FromJSON
 * @implements {OnInit}
 */
export class FromJSON implements OnInit {

    constructor(private _http: Http, public lang: LangService.LangService,
            public path: string, public vm: Serializable) {}

    /**
     * Executes .getJSON() immediately on init. Subscribes to the language
     * service and executes .getJSON() when the language changes.
     *
     * @memberof FromJSON
     */
    ngOnInit(): void {
        console.log('calling ngoninit');
        this.getJSON();
        this.lang.getEmitter().subscribe((newData) => {
            console.log('language changed');
            this.getJSON();
        });
    }

    /**
     * Instantiate the VM from a JSON string and language
     * @param json a json string representation of the VM
     * @param language the language to load
     */
    fromJSON(json: object, language: string): void {
        this.vm.fromJSON(json[language]);
    }

    /**
     * Retrieves the JSON model for the current language from the path.
     *
     * @memberof FromJSON
     */
    getJSON(): void {
        this._http.get(this.path).subscribe(res => {
            this.lang.getStringAsync().then(l => {
                    this.fromJSON(res.json(), l)
                }
            );
        });
    }

}
