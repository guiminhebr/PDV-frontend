import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendacomponent } from './vendacomponent';

describe('Vendacomponent', () => {
  let component: Vendacomponent;
  let fixture: ComponentFixture<Vendacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vendacomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vendacomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
