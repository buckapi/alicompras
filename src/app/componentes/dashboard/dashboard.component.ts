import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { AuthPocketbaseService } from '../../services/auth-pocketbase.service';
import { RealtimeProductosService } from '../../services/realtime-productos.service';
import { RealtimeCategoriasService } from '../../services/realtime-categorias.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalProductos: number = 0;
  productos: any[] = [];
  userName: string = '';
  
constructor(
  public global: GlobalService,
  public authService: AuthPocketbaseService,
  public realtimeProductosService: RealtimeProductosService,
  public realtimecategorias: RealtimeCategoriasService
) {}
ngOnInit(): void {
  this.productos = this.global.getProductos(); // Obtén la lista de productos
  this.totalProductos = this.global.getProductosCount(); // Obtén el conteo de productos
} 

}
