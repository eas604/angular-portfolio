import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Serializable } from './serializable';

describe('Serializable', () => {
  // have an example class extend Serializable
  class Mock extends Serializable {
    mystring: string;
    mynum: number;
    mydate: Date;
  }

  let mymock;
  const jsonstr = `{
        "mystring": "Hello",
        "mynum": 8675309,
        "mydate": "2016-09-14"
    }`;
  const jsonobj = JSON.parse(jsonstr);
  const d = new Date(2016, 8, 13);

  beforeAll( () => {
    mymock = new Mock();
    mymock.fromJSON(jsonobj);
  });

  it('deserializes a string', () => {
      expect(mymock.mystring).toBe('Hello');
  });

  it('deserializes a number', () => {
      expect(mymock.mynum).toEqual(8675309);
  });

  it('deserializes a date: year', () => {
      expect(mymock.mydate.getFullYear()).toEqual(d.getFullYear());
  });

  it('deserializes a date: month', () => {
      expect(mymock.mydate.getMonth()).toEqual(d.getMonth());
  });

  it('deserializes a date: day', () => {
      expect(mymock.mydate.getDay()).toEqual(d.getDay());
  });

});
