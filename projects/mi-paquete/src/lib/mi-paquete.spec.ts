import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPaquete } from './mi-paquete';

describe('MiPaquete', () => {
  let component: MiPaquete;
  let fixture: ComponentFixture<MiPaquete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPaquete],
    }).compileComponents();

    fixture = TestBed.createComponent(MiPaquete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
