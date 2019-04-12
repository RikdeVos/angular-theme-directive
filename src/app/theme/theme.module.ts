import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './directives/theme.directive';

@NgModule({
  declarations: [ThemeDirective],
  imports: [CommonModule],
  exports: [ThemeDirective]
  // providers: [ThemeService]
})
export class ThemeModule {}
