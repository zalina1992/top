import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-effektiv-bruk-av-sokeord',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single2.component.html',
  styles: ``
})
export class BlogSingle2Component implements OnInit {
  year = new Date().getFullYear();

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.scrollToTop();
    this.titleService.setTitle('Søkemotoroptimalisering – Effektivt SEO i Oslo');
    this.metaService.updateTag({
      name: 'description',
      content: 'Les hvordan vi hjelper deg med effektiv SEO og synlighet i Google i Oslo.'
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}