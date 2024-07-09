import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPracticeComponent } from './crud-practice.component';

describe('CrudPracticeComponent', () => {
  let component: CrudPracticeComponent;
  let fixture: ComponentFixture<CrudPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
