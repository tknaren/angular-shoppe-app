import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MsalGuard } from '@azure/msal-angular';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  // {path:'/', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'shopping-cart', component: ShoppingCartComponent},
  {path:'check-out', component:CheckOutComponent},
  {path:'order-success', component:OrderSuccessComponent},
  {path:'login', component:LoginComponent},
  {path:'my/orders', component:MyOrdersComponent, canActivate: [MsalGuard]},
  {path:'admin/products/new', component:ProductFormComponent, canActivate: [MsalGuard]},
  {path:'admin/products/:id', component:ProductFormComponent, canActivate: [MsalGuard]},
  {path:'admin/products', component:AdminProductsComponent, canActivate: [MsalGuard]},
  {path:'admin/orders', component:AdminOrdersComponent, canActivate: [MsalGuard]}
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
