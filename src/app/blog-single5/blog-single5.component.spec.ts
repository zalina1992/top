import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogSingle5Component } from './blog-single5.component';

describe('BlogSingle5Component', () => {
  let component: BlogSingle5Component;
  let fixture: ComponentFixture<BlogSingle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSingle5Component]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogSingle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});