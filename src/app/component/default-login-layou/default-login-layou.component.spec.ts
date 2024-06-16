import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginLayouComponent } from './default-login-layou.component';

describe('DefaultLoginLayouComponent', () => {
  let component: DefaultLoginLayouComponent;
  let fixture: ComponentFixture<DefaultLoginLayouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginLayouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultLoginLayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
