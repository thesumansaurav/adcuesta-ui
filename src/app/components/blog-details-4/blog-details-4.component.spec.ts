import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails4Component } from './blog-details-4.component';

describe('BlogDetails4Component', () => {
  let component: BlogDetails4Component;
  let fixture: ComponentFixture<BlogDetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetails4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
