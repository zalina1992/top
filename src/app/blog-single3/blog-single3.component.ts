import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-single3',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single3.component.html',
  styles: ``
})
export class BlogSingle3Component implements OnInit {
  year = new Date().getFullYear();

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollToTop();

    // ✅ SEO metadata
    this.titleService.setTitle('Mobilvennlig nettside – Viktige SEO-tiltak i 2025');
    this.metaService.updateTag({
      name: 'description',
      content: 'Oppdag hvordan du lager en mobilvennlig nettside som rangerer godt i 2025. Effektive tips for synlighet og brukervennlighet.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Mobilvennlig nettside – Viktige SEO-tiltak i 2025'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Få innsikt i mobiloptimalisering og hvorfor det er avgjørende for SEO i 2025.'
    });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goHomeToBlog(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const target = document.getElementById('list-item-7');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    });
  }
}
