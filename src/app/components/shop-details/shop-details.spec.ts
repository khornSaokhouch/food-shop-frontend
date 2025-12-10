import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsComponent } from './shop-details';

describe('ShopDetails', () => {
  let component: ShopDetailsComponent;
  let fixture: ComponentFixture<ShopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
