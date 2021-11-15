import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputadoTabsComponent } from './deputado-tabs.component';

describe('DeputadoTabsComponent', () => {
  let component: DeputadoTabsComponent;
  let fixture: ComponentFixture<DeputadoTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputadoTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputadoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
