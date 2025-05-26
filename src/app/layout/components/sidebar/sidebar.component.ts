import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GsapRevealDirective } from '../../../directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { ClassManagerService } from '../../../services/classmanaer.service';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import aos from 'aos';
import { CounterDirective } from '../../../directives/counter.directive';

@Component({
  selector: 'app-sidebar',
  imports: [
    GsapRevealDirective,
    CounterDirective,
    CommonModule,
    RouterOutlet,
    ScrollToModule,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styles: ``,
  providers: [ScrollToService],
})
export class SidebarComponent {
  currentSection = 'list-item-1';
  year = new Date().getFullYear();
  isModelOpen: boolean = false;
  currentPage = 1;
  postsPerPage = 4;

  sectionIds = [
    'list-item-1',
    'list-item-2',
    'list-item-3',
    'list-item-4',
    'list-item-5',
    'list-item-6',
    'list-item-7',
    'list-item-8',
  ];

  allPosts = [
    {
      title: '5 enkle SEO-tiltak for en nettside av høy kvalitet',
      link: '/sokemotoroptimalisering-effektivt-seo-oslo',
      image: 'assets/img/all-images/blog/blog-img1.png',
      date: 'Mai 12, 2025',
      tag: 'SEO-tips',
      readTime: '3 min lesing',
    },
    {
      title: 'Hvordan bruke søkeord effektivt i 2025',
      link: '/seo-nettside-for-bedrifter',
      image: 'assets/img/all-images/blog/blog-img2.png',
      date: 'Mai 20, 2025',
      tag: 'Søkemotoroptimalisering',
      readTime: '4 min lesing',
    },
    {
      title: 'Nettside søkemotoroptimalisering – slik blir du synlig på Google',
      link: '/hvordan-bruke-sokeord-i-2025',
      image: 'assets/img/all-images/blog/blog-img9.jpg',
      date: 'Mai 14, 2025',
      tag: 'Effektivt SEO',
      readTime: '4 min lesing',
    },
    {
      title: 'SEO i Norge 2025 – Slik blir du synlig i Google',
      link: '/seo-norge-2025',
      image: 'assets/img/all-images/blog/enkelt-seo.png',
      date: 'Mai 24, 2025',
      tag: 'Søkemotoroptimalisering',
      readTime: '6 min lesing',
    },
    {
      title: 'Hvordan dominere Google med innhold – SEO-strategi for 2025',
      link: '/seo-sokemotoroptimalisering-effektivt',
      image: 'assets/img/all-images/blog/sokemotoroptimalisering.png',
      date: 'Mai 26, 2025',
      tag: 'Søkemotoroptimalisering',
      readTime: '7 min lesing',
    },
  ];

  constructor(
    private renderer: Renderer2,
    public classManager: ClassManagerService
  ) {}

  ngOnInit() {
    aos.init();
    this.ensureParallaxieClass();
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
  }

  setActiveLink(sectionId: string): void {
    this.currentSection = sectionId;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkActiveSection();
  }

  checkActiveSection(): void {
    for (let id of this.sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 3) {
          this.currentSection = id;
          break;
        }
      }
    }
  }

  get paginatedPosts() {
    const start = (this.currentPage - 1) * this.postsPerPage;
    return this.allPosts.slice(start, start + this.postsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.allPosts.length / this.postsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;

      const blogSection = document.getElementById('list-item-7');
      if (blogSection) {
        const rect = blogSection.getBoundingClientRect();
        const isAboveView = rect.bottom < 0;
        const isBelowView = rect.top > window.innerHeight;

        // 🔁 Scroll only if blog section is off-screen (above or below)
        if (isAboveView || isBelowView) {
          blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      this.ensureParallaxieClass();
    }
  }

  private ensureParallaxieClass(): void {
    const element = document.querySelector('.parallaxie');
    if (element && !element.classList.contains('parallaxie')) {
      element.classList.add('parallaxie');
    }
  }
}