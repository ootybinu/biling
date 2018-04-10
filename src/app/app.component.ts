import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
direction = "ltr";
  title = 'app';
  constructor( private trans:TranslateService) {
trans.setDefaultLang('en');
trans.use('en');
   }
    switchLanguage(language: string) {
    	this.direction =  (language != 'en') ?'rtl':'ltr';

    this.trans.use(language);
  }
}
