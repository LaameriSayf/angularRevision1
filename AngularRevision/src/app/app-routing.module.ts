import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, { path: 'cotact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, { path: 'apropos', loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
