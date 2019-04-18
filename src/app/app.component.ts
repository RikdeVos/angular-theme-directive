import { Component } from '@angular/core';

import { ThemeService } from './theme/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  themeBtn(themeName: string) {
    this.themeService.setThemeName(themeName);
  }
}
