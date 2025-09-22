import normalizeUrl from 'normalize-url';
const isLocalhost = (url) => {
    return /(localhost|127\.0\.0\.1|\[?::1]?)(:\d+)?$/.test(url);
};
/*
 * По-умолчанию, адрес дополняется протоколом и вырезается www
 * Этот метод может выбросить исключение только в том случае,
 * если экспепнш произойдет в normalize-url
*/
const urlNormalizer = (url, options) => {
    const normalizedUrl = normalizeUrl(url, options);
    // По стандарту WHATWG URL API конструктор всегда добавляет слэш,
    // поэтому убирать его заранее через normalize-url нне имеет смысла
    return new URL(normalizedUrl);
};
export { urlNormalizer, isLocalhost };
