import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './views/preview/preview.component';
import { BlogSingleComponent } from './views/blog-single/blog-single.component';
import { BlogSingle2Component } from './blog-single2/blog-single2.component';
import { BlogSingle3Component } from './blog-single3/blog-single3.component';
import { BlogSingle4Component } from './blog-single4/blog-single4.component';
import { BlogSingle5Component } from './blog-single5/blog-single5.component';
import { BlogLayoutComponent } from './layout/blog-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
      },
    ],
  },
  {
    path: 'sokemotoroptimalisering-effektivt-seo-oslo',
    component: BlogLayoutComponent,
    children: [{ path: '', component: BlogSingleComponent }],
  },
  {
    path: 'seo-nettside-for-bedrifter',
    component: BlogLayoutComponent,
    children: [{ path: '', component: BlogSingle2Component }],
  },
  {
    path: 'hvordan-bruke-sokeord-i-2025',
    component: BlogLayoutComponent,
    children: [{ path: '', component: BlogSingle3Component }],
  },
  {
    path: 'seo-norge-2025',
    component: BlogLayoutComponent,
    children: [{ path: '', component: BlogSingle4Component }],
  },
  {
    path: 'seo-sokemotoroptimalisering-effektivt',
    component: BlogLayoutComponent,
    children: [{ path: '', component: BlogSingle5Component }],
  },
  {
    path: 'preview',
    component: PreviewComponent,
  },
];

// Dodaj do AppModule (lub main.ts jeśli masz standalone):
// RouterModule.forRoot(routes, {
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 80] // jeśli masz sticky navbar
// });
