import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagehomeComponent } from './components/pagehome/pagehome.component';
import { PageallproductComponent } from './components/pageallproduct/pageallproduct.component';
import { PagedetailproductComponent } from './components/pagedetailproduct/pagedetailproduct.component';
import { PagecartproductComponent } from './components/pagecartproduct/pagecartproduct.component';
import { AdminComponent } from './admin/admin.component';
import { ClientsComponent } from './layout/clients/clients.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { AdmincontrolsComponent } from './components/admincontrols/admincontrols.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'' , component: ClientsComponent , children : [
      {
        path:'' , component: PagehomeComponent
      },
      {
        path:'product' , component: PageallproductComponent
      },
      {
        path:'product/:id' , component: PagedetailproductComponent
      },
      {
        path:'cart' , component: PagecartproductComponent
      },
      {
        path: 'register' , component: RegisterComponent
      },
      {
        path: 'login' , component: LoginComponent
      }
    ]
  },
  {
    path:'admin' , component: AdminComponent,  children : [
      {
        path: 'add' ,component : AddProductComponent
      },
      {
        path: 'addcategory' ,component : AddCategoryComponent
      },
      {
        path: 'edit/:id' , component : EditProductComponent
      }
    ],canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
