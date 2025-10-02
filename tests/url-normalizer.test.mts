import {describe, it, expect} from 'vitest';
import {urlNormalizer, isLocalhost} from '#index.mts';

describe('isLocalhost', () => {
    it('Should return true for localhost without port', () => {
        expect(isLocalhost('localhost')).toBe(true);
    });

    it('Should return true for localhost with port', () => {
        expect(isLocalhost('localhost:3000')).toBe(true);
    });

    it('Should return true for 127.0.0.1', () => {
        expect(isLocalhost('127.0.0.1')).toBe(true);
    });

    it('Should return true for 127.0.0.1 with port', () => {
        expect(isLocalhost('127.0.0.1:8080')).toBe(true);
    });

    it('Should return true for ::1', () => {
        expect(isLocalhost('::1')).toBe(true);
    });

    it('Should return false for external domain', () => {
        expect(isLocalhost('example.com')).toBe(false);
    });
});

describe('urlNormalizer', () => {
    it('Should add protocol if missing', () => {
        const {href} = urlNormalizer('example.com');

        expect(href).toBe('http://example.com/');
    });

    it('Should preserve https if present', () => {
        const {href} = urlNormalizer('https://example.com/test');

        expect(href).toBe('https://example.com/test');
    });

    it('Should remove www by default', () => {
        const {href} = urlNormalizer('http://www.example.com');

        expect(href).toBe('http://example.com/');
    });

    it('Should keep www when stripWWW is false', () => {
        const {href} = urlNormalizer('http://www.example.com', {stripWWW: false});

        expect(href).toBe('http://www.example.com/');
    });

    it('Should throw for invalid url', () => {
        expect(() => urlNormalizer('http://')).toThrow();
    });
});
