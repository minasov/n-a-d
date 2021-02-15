const reverse = require('../lib/reverse');

describe('reverse function', () => {
    test('should return empty when string is empty, underfined or null', () => {
        expect(reverse(null)).toEqual('')
        expect(reverse('')).toEqual('')
        expect(reverse(undefined)).toEqual('')
    })

    test('should reverse a valid string', () => {
        expect(reverse('Edgar Allan Poe')).toEqual('eoP nallA ragdE')
        expect(reverse('The quick brown fox jumps over the lazy dog.')).toEqual('.god yzal eht revo spmuj xof nworb kciuq ehT')
    })

    test('should handle Cyrillic and Japanese', () => {
        expect(reverse('Эдгар Аллан По')).toEqual('оП наллА рагдЭ')
        expect(reverse('エドガー・アラン・ポー')).toEqual('ーポ・ンラア・ーガドエ')

    })
})