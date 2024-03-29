import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesComponent } from './condicionales.component';

describe('CondicionalesComponent', () => {
  let component: CondicionalesComponent;
  let fixture: ComponentFixture<CondicionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});