import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; // ✅ SEO
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { TopbarComponent } from "../../layout/components/topbar/topbar.component";

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single.component.html',
  styles: ``
})
export class BlogSingleComponent implements OnInit {
  year = new Date().getFullYear();

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.scrollToTop();

    // ✅ Ustawienia SEO
    this.titleService.setTitle('Søkemotoroptimalisering – Effektivt SEO i Oslo | Vellykket');
    this.metaService.updateTag({
      name: 'description',
      content: 'Lær hvordan du kan optimalisere nettsiden din for søkemotorer. Effektive SEO-tips og strategier for bedrifter i Oslo fra Vellykket.'
    });

    // (Opcjonalnie) Open Graph / social sharing
    this.metaService.updateTag({ property: 'og:title', content: 'Søkemotoroptimalisering – Effektivt SEO i Oslo | Vellykket' });
    this.metaService.updateTag({ property: 'og:description', content: 'SEO-strategier for å bli synlig i Google. Les artikkelen nå.' });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}