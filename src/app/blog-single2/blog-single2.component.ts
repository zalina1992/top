import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router'; // ✅ Dodano

@Component({
  selector: 'app-effektiv-bruk-av-sokeord',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single2.component.html',
  styles: ``
})
export class BlogSingle2Component implements OnInit {
  year = new Date().getFullYear();

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router // ✅ Dodano
  ) {}

  ngOnInit(): void {
    this.scrollToTop();

    // ✅ SEO
    this.titleService.setTitle('Søkemotoroptimalisering – Effektivt SEO i Oslo | Vellykket');
    this.metaService.updateTag({
      name: 'description',
      content: 'Les hvordan vi hjelper deg med effektiv SEO og synlighet i Google i Oslo.'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Søkemotoroptimalisering – Effektivt SEO i Oslo | Vellykket'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Få innsikt i effektive strategier for synlighet i søkemotorer.'
    });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ✅ Powrót do sekcji blogg
  goHomeToBlog(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('list-item-7');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    });
  }
}
