import { getNextModeByKey } from './mode';

describe('Mode test', () => {
    describe('[getNextModeByKey]', () => {
        test('test none', () => {
            expect('none').toEqual(getNextModeByKey('none', 27));
        });

        test('test search', () => {
            expect('search').toEqual(getNextModeByKey('none', 191));
        });

        test('test create', () => {
            expect('create').toEqual(getNextModeByKey('none', 78));
        });
    });
});
