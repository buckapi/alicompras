import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GlobalService } from './services/global.service';
import { FooterComponent } from "./componentes/ui/footer/footer.component";
import { HeadComponent } from './componentes/ui/head/head.component';
import { DetailProductComponent } from './componentes/detail-product/detail-product.component';
import { ShopComponent } from './componentes/shop/shop.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { AboutComponent } from './componentes/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    HomeComponent, 
    FooterComponent,
    HeadComponent,
    DetailProductComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alicompras';
  constructor (
    public global: GlobalService,)
    {}
}
