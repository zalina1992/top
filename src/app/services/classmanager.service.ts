import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassManagerService {
  private currentClass: string = 'parallaxie bg-custom'; // <-- dodaj klasę z tłem domyślnie

  setClass(className: string) {
    this.currentClass = className;
  }

  getClass(): string {
    return this.currentClass;
  }
}