import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteComponent } from './write.component';

describe('MarkdownEditorComponent', () => {
  let component: WriteComponent;
  let fixture: ComponentFixture<WriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteComponent],
    });
    fixture = TestBed.createComponent(WriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
