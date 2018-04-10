import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader } from '@ngx-translate/http-loader';
import  {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranComponent } from './tran/tran.component';
import { AppComponent } from './app.component';

const routes:Routes=[
{path:'tran', component:TranComponent}
];
// export function HttpLoaderFactory(http: HttpClient) {
//     return new TranslateHttpLoader(http);
// }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    TranComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) , 
    HttpClientModule,
    TranslateModule.forRoot({
    	loader:{
    		provide:TranslateLoader, 
    		useFactory: (createTranslateLoader), 
    		deps:[HttpClient]
    	}

    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
