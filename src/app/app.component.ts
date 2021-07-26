import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Cropper from 'cropperjs';
import {passport} from 'passport-auth0'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
constructor(private translate: TranslateService){
  translate.setDefaultLang('en');
  translate.use('en');
}




}
