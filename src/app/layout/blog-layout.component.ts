import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
  template: `
    <app-topbar />
    <router-outlet />
  `,
})
export class BlogLayoutComponent {}