import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { RealtimeCategoriasService } from '../../services/realtime-categorias.service';
import { RealtimeProductosService } from '../../services/realtime-productos.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
categorias: any[] = [];
productos: any[] = [];
  constructor 
  (
    public global: GlobalService,
    public realtimecategorias: RealtimeCategoriasService,
    public realtimeproductos: RealtimeProductosService
  )
  {
    this.realtimecategorias.categorias$.subscribe((categorias) => {
      this.global.categorias = categorias;
    });
    this.realtimeproductos.productos$.subscribe((productos) => {
      this.global.productos = productos;
    })
}

ngOnInit(): void {
  this.global.setRoute('home');

}
}
