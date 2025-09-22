import { type Options } from 'normalize-url';
declare const isLocalhost: (url: string) => boolean;
declare const urlNormalizer: (url: string, options?: Options) => URL;
export { urlNormalizer, isLocalhost };
