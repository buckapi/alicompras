import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GlobalService } from './services/global.service';
import { FooterComponent } from "./componentes/ui/footer/footer.component";
import { HeadComponent } from './componentes/ui/head/head.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    HomeComponent, 
    FooterComponent,
    HeadComponent
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
