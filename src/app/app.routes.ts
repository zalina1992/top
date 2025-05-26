import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './views/preview/preview.component';
import { BlogSingleComponent } from './views/blog-single/blog-single.component';
import { BlogSingle2Component } from './blog-single2/blog-single2.component';
import { BlogSingle3Component } from './blog-single3/blog-single3.component';
import { BlogSingle4Component } from './blog-single4/blog-single4.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
  },
  {
    path: 'preview',
    component: PreviewComponent,
  },
  // SEO-friendly blog routes:
  {
    path: 'sokemotoroptimalisering-effektivt-seo-oslo',
    component: BlogSingleComponent,
  },
  {
    path: 'seo-nettside-for-bedrifter',
    component: BlogSingle2Component,
  },
  {
    path: 'hvordan-bruke-sokeord-i-2025',
    component: BlogSingle3Component,
  },
  {
    path: 'seo-norge-2025',
    component: BlogSingle4Component,
  }
];