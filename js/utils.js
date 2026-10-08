// js/utils.js
export const qs  = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

export function on(el, event, handler, options = {}) {
    if (el) el.addEventListener(event, handler, options);
}