import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeRoute = 'home';
  categorias: any[] = [];
  constructor() { }
  setRoute(route: string) {
    this.activeRoute = route;
  }
  getCategorias(): any[] {
    return this.categorias;
  }
}
