import { assert } from 'chai';
import { isLatLongWithinRadius } from '../src/services/locationServices';

describe('isLatLongInRadius', () => {
    it('givenValidCoords_WhenLeagueIsInRadius_thenReturnTrue', () => {
        const expectedOriginLatLong = {"lat":43.10,"long":73.23};
        const expectedRadius = 2;
        const expectedSearchLatLong = {"lat":43.55, "long":73.55};
        const actualResult = isLatLongWithinRadius(expectedOriginLatLong,expectedRadius,expectedSearchLatLong);
        assert.equal(actualResult,true,"league is within radius");
    });
   });
    