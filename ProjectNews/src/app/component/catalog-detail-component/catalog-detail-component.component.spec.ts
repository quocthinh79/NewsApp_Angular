import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDetailComponentComponent } from './catalog-detail-component.component';

describe('CatalogDetailComponentComponent', () => {
  let component: CatalogDetailComponentComponent;
  let fixture: ComponentFixture<CatalogDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
