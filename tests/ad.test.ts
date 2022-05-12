import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one entry.', async () => {

    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.name).toBe('Testowa');

});

test('AdRecord returns null from database for unexisting entry.', async () => {

    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();

});
