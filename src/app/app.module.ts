import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './app.translate.factory';
import { environment } from '../environments/environment';
import { injectorRef } from './core/utiles/injectorRef';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: 'defaultLanguage', useValue: environment.defaultLanguage },
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // store a reference to the application injector
    injectorRef(injector);
  }
}

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}

