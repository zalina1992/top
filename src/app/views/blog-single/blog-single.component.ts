import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'; // ✅ SEO
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { TopbarComponent } from "../../layout/components/topbar/topbar.component";
import { RouterModule, Router } from '@angular/router'; // ✅ Router

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [
    GsapRevealDirective,
    TopbarComponent,
    RouterModule // ✅ potrzebny dla [routerLink] i nawigacji
  ],
  templateUrl: './blog-single.component.html',
  styles: ``
})
export class BlogSingleComponent implements OnInit {
  year = new Date().getFullYear();

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router // ✅ dodaj Router
  ) {}

  ngOnInit(): void {
    this.scrollToTop();

    // ✅ SEO
    this.titleService.setTitle('Søkemotoroptimalisering – Effektivt SEO i Oslo | Vellykket');
    this.metaService.updateTag({
      name: 'description',
      content: 'Lær hvordan du kan optimalisere nettsiden din for søkemotorer. Effektive SEO-tips og strategier for bedrifter i Oslo fra Vellykket.'
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Søkemotoroptimalisering – Effektivt SEO i Oslo | Vellykket' });
    this.metaService.updateTag({ property: 'og:description', content: 'SEO-strategier for å bli synlig i Google. Les artikkelen nå.' });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ✅ Przewiń do sekcji Blogg po powrocie na stronę główną
  goHomeToBlog(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const target = document.getElementById('list-item-7');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // małe opóźnienie, by DOM się załadował
    });
  }
}
