import { TestBed, inject } from '@angular/core/testing';

import { Utilities } from './utilities';

describe('Utilities', () => {
    enum Editors {
        Vim,
        VSCode,
        NotepadPlusPlus
    }

    it('should return `Vim` for 0', () => {
        expect(Utilities.enumToString(0, Editors)).toEqual('Vim');
    });

    it('should return `VSCode` for Editors.VSCode', () => {
        expect(Utilities.enumToString(Editors.VSCode, Editors)).toEqual('VSCode');
    });

    it('should return [`VSCode`, `NotepadPlusPlus`] for list', () => {
        const eds = [Editors.VSCode, Editors.NotepadPlusPlus],
            streds = ['VSCode', 'NotepadPlusPlus'];
        expect(Utilities.enumsToString(eds, Editors)).toEqual(streds);
    });
});
