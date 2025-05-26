import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-single4',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single4.component.html',
  styles: ``
})
export class BlogSingle4Component implements OnInit {
  year = new Date().getFullYear();

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.scrollToTop();

    // 🔹 SEO-optimalisert tittel og metabeskrivelse for blogginnlegg
    this.titleService.setTitle('SEO i Norge 2025 – Slik blir du synlig i Google');
    this.metaService.updateTag({
      name: 'description',
      content: 'Lær hvordan du bruker søkemotoroptimalisering (SEO) for å få flere kunder i Norge. Lokal SEO, innholdsstrategi og teknisk optimalisering for høyere rangering i Google.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'SEO Norge, søkemotoroptimalisering, Google synlighet, lokal SEO, SEO Oslo, SEO tjenester, digital markedsføring, nettsideoptimalisering'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'SEO i Norge 2025 – Slik blir du synlig i Google'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Effektiv SEO-strategi for norske bedrifter: teknisk SEO, innhold og lokal synlighet. Alt du trenger for bedre rangering i 2025.'
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}