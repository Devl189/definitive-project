import { Injector } from '@angular/core';

let injRef: Injector;
export const injectorRef = (injector?: Injector): Injector => {
  if (injector) {
    injRef = injector;
  }
  return injRef;
};
