import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  
  faLanguage = faLanguage;
  currLang: string = 'en';
  
  constructor(public translateService: TranslateService) { 
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('en');
  }
  
  translateSite(language: string) {
    this.translateService.use(language);
    this.currLang = language;
  }
  
  ngOnInit(): void {
    this.currLang = this.translateService.currentLang || this.translateService.defaultLang;
  }
  
}
