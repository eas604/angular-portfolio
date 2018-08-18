import { TestBed, async, inject } from '@angular/core/testing';
import {
    Http,
    HttpModule,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { FakeBackend } from 'ngx-http-test'
import { FromJSON } from './from-json';
import { Serializable } from './serializable';
import { LangService } from '../langservice/lang.service';

describe('FromJSON', () => {
    class MockVM extends Serializable {
        title: string
    }

    const mockResponse = `{
            "English": {
                "title": "The Slow Regard of Silent Things"
            },
            "Español": {
                "title": "La Música del Silencio"
            }
        }`;
    const mockObj = JSON.parse(mockResponse);
    const path = 'foo.json';
    let langSvc: LangService.LangService;
    let mockHttp: FakeBackend;
    let http: Http;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                LangService.LangService,
                FakeBackend.getProviders()
            ]
        });
    });
    beforeEach(inject([LangService.LangService, FakeBackend, Http],
            (lang: LangService.LangService, fakeBackend, _http) => {
        langSvc = lang;
        mockHttp = fakeBackend;
        http = _http;
    }));

    it('should instantiate from JSON', () => {
        // create an instance of FromJSON with a simple vm
        const mymock: FromJSON = new FromJSON(
                http, langSvc, path, new MockVM()
            );
        mymock.fromJSON(mockObj, 'English');
        const vm: MockVM = <MockVM>mymock.vm;

        // and test that the vm was instantiated from our mock JSON
        expect(vm).toBeDefined();
        expect(vm.title).toEqual('The Slow Regard of Silent Things');
    });

    it('should provide title en Español', () => {
        // create an instance of FromJSON with a simple vm
        const mymock: FromJSON = new FromJSON(
                http, langSvc, path, new MockVM()
            );
        mymock.fromJSON(mockObj, 'Español');
        const vm: MockVM = <MockVM>mymock.vm;

        expect(vm).toBeDefined();
        expect(vm.title).toEqual('La Música del Silencio');
    });

    /*
    it('should subscribe to language changes', (done) => {
        // listen for Http gets, and respond with our mock response string.
        // mockHttp.expectGet(path).respond(mockResponse);

        const spy = spyOn(langSvc, 'emit').and
            .returnValue(Promise.resolve('Español'));

        // create an instance of FromJSON with a simple vm
        const mymock: FromJSON = new FromJSON(
                http, langSvc, path, new MockVM()
            );

        // call ngOnInit so we subscribe to language changes
        mymock.ngOnInit();

        // switch to Español
        langSvc.setString('Español');

        const vm: MockVM = <MockVM>mymock.vm;
        expect(vm).toBeDefined();
        expect(vm.title).toEqual('La Música del Silencio');
        done();
    });*/

    // it('should instantiate from GET request', (done) => {
        // listen for Http gets, and respond with our mock response string.
        // mockHttp.expectGet('foo.json').respond(mockResponse);
    // });
});
