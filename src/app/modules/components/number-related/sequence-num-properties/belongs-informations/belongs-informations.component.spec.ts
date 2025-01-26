import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelongsInformationsComponent } from './belongs-informations.component';

describe('BelongsInformationsComponent', () => {
  let component: BelongsInformationsComponent;
  let fixture: ComponentFixture<BelongsInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelongsInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelongsInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
