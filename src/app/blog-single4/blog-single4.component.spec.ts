import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogSingle4Component } from './blog-single4.component';

describe('BlogSingle4Component', () => {
  let component: BlogSingle4Component;
  let fixture: ComponentFixture<BlogSingle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSingle4Component]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogSingle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});