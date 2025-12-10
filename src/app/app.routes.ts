import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { HomeComponent } from './pages/home/home';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { LoginComponent } from './pages/login/login';
import { CategoryComponent } from './pages/category/category';
import { ShopPageComponent } from './pages/shop/shop';
import { ShopDetailsComponent } from './components/shop-details/shop-details';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // home page
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'shop', component: ShopPageComponent},
  { path: 'shop/:id', component: ShopDetailsComponent }, // shop details
  { path: 'categories', component: CategoryComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
];
