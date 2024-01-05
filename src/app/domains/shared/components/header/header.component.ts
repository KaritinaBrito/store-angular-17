import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hiddeSideMenu = signal(true);
  private cartService = inject(CartService);
  cart= this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu(){
    this.hiddeSideMenu.update(prevState => !prevState);
  }

}
