import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassManagerService {
  private currentClass: string = 'parallaxie';

  setClass(className: string): void {
    this.currentClass = className;
  }

  getClass(): string {
    return this.currentClass;
  }
}