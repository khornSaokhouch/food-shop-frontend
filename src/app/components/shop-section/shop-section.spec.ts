import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSection } from './shop-section';

describe('ShopSection', () => {
  let component: ShopSection;
  let fixture: ComponentFixture<ShopSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
