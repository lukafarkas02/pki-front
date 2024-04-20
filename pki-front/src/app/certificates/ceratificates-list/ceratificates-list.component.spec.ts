import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeratificatesListComponent } from './ceratificates-list.component';

describe('CeratificatesListComponent', () => {
  let component: CeratificatesListComponent;
  let fixture: ComponentFixture<CeratificatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeratificatesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeratificatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
