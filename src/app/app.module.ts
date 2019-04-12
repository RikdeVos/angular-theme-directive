import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn/btn.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [AppComponent, BtnComponent],
  imports: [BrowserModule, ThemeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
