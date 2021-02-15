const shareUrl = require('../lib/sharedUrl');

const parameters = {
    utm_source: 'publicis_sapient',
    utm_campaign: '2021',
    utm_medium: 'Social'
}
const baseUrl = 'https://www.publicissapient.com/'
const parametersString = '?utm_source=publicis_sapient&utm_campaign=2021&utm_medium=Social';
const hashString = '#utm_source=publicis_sapient&utm_campaign=2021&utm_medium=Social';
const invalidURL = 'Invalid URL';

describe('shareUrl', () => {
    test('should return \'Invalid URL\' when null, empty, underfined is passed', () => {
        expect(shareUrl(null)).toEqual(invalidURL)
        expect(shareUrl('')).toEqual(invalidURL)
        expect(shareUrl(undefined)).toEqual(invalidURL)
    })
    test('should return \'Invalid URL\' when a malformed or invalid URL is passed', () => {
        const expected = 'Invalid URL';
        expect(shareUrl('publicissapient')).toEqual(invalidURL)
        expect(shareUrl('https//www.publicissapient.com/about')).toEqual(invalidURL)
    })

    test('should attach tracking parameters when NOT present', () => {
        let result = baseUrl;
        let expected = baseUrl + parametersString;
        expect(shareUrl(result,parameters)).toEqual(expected);
    })

    test('should NOT attach additional tracking parameters URL when present', () => {
        let result = baseUrl + parametersString;
        let expected = baseUrl + parametersString;
        expect(shareUrl(result,parameters)).toEqual(expected);
    })

    test('should NOT attach tracking parameters to URL when the parameters are present in fragment', () => {
        let result = baseUrl + hashString;
        let expected = baseUrl + hashString;
        expect(shareUrl(result,parameters)).toEqual(expected);
    })
})