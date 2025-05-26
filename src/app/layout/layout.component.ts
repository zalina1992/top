import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router'; // ✅ poprawnie zaimportowany tylko raz

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TopbarComponent,
    SidebarComponent,
    RouterModule // ✅ potrzebne do działania <router-outlet>
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const magnetics = this.el.nativeElement.querySelectorAll('.magnetic');
    document.addEventListener('mousemove', (e: MouseEvent) => {
      magnetics.forEach((el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX ** 2 + distY ** 2);
        const threshold = 300;
        if (distance < threshold) {
          const strength = 1 - distance / threshold;
          el.style.transform = `translate(${distX * 0.25 * strength}px, ${distY * 0.25 * strength}px)`;
        } else {
          el.style.transform = 'translate(0, 0)';
        }
      });
    });
  }
}