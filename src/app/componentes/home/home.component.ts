import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { RealtimeCategoriasService } from '../../services/realtime-categorias.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
categorias: any[] = [];
  constructor 
  (
    public global: GlobalService,
    public realtimecategorias: RealtimeCategoriasService
  )
  {
    this.realtimecategorias.categorias$.subscribe((categorias) => {
      this.global.categorias = categorias;
    });
}

ngOnInit(): void {
  this.global.setRoute('home');

}
}
