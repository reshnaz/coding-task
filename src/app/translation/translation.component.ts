import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  // Texts used for translation are fetched from json files inside assets folder.
  
  faLanguage = faLanguage;
  currLang: string = 'en';
  
  constructor(public translateService: TranslateService) { 
    // Add languages to list of possible translations
    translateService.addLangs(['en', 'de']);
    // Set default language to English
    translateService.setDefaultLang('en');
  }
  
  translateSite(language: string) {
    // Use dropdown selection for translating page
    this.translateService.use(language);
    this.currLang = language;
  }
  
  ngOnInit(): void {
    this.currLang = this.translateService.currentLang || this.translateService.defaultLang;
  }
  
}
