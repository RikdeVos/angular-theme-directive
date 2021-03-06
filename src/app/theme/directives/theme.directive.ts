import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ThemeService } from '../services/theme.service';
import { Theme } from '../models/theme.interface';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnChanges, OnDestroy {
  @Input('appTheme') themeInput: any;

  private properties: string[];
  private theme: Theme;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private themeService: ThemeService, private el: ElementRef) {}

  ngOnInit() {
    this.themeService.theme$.pipe(takeUntil(this.destroy$)).subscribe(theme => {
      this.properties = Object.keys(this.themeInput);
      this.theme = theme;
      this.applyStyles();
    });
  }

  ngOnChanges() {
    if (this.properties && this.theme) {
      this.applyStyles();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  applyStyles() {
    this.properties.forEach(property => {
      if (!this.themeInput[property]) {
        this.el.nativeElement.style[property] = null;
        return;
      }
      if (!this.theme[this.themeInput[property]]) {
        throw Error(`Invalid theme property: ${this.themeInput[property]}`);
      }
      this.el.nativeElement.style[property] = this.theme[
        this.themeInput[property]
      ];
    });
  }
}
