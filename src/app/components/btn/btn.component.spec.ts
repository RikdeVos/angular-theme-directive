import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponent } from './btn.component';
import { ThemeModule } from '../../theme/theme.module';

describe('BtnComponent', () => {
  let component: BtnComponent;
  let fixture: ComponentFixture<BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtnComponent],
      imports: [ThemeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
