import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-single3',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single3.component.html',
  styles: ``
})
export class BlogSingle3Component implements OnInit {
  year = new Date().getFullYear();

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.scrollToTop();

    // 🔹 SEO tytuł i opis — możesz je dostosować do tematyki posta
    this.titleService.setTitle('Mobilvennlig nettside – Viktige SEO-tiltak i 2025');
    this.metaService.updateTag({
      name: 'description',
      content: 'Oppdag hvordan du lager en mobilvennlig nettside som rangerer godt i 2025. Effektive tips for synlighet og brukervennlighet.'
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}