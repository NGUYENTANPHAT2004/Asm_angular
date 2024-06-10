import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin/admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DautrangComponent } from './components/dautrang/dautrang.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannertowComponent } from './components/bannertow/bannertow.component';
import { AllproComponent } from './components/allpro/allpro.component';
import { ProductoneComponent } from './components/productone/productone.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductowComponent } from './components/productow/productow.component';
import { Productlist2Component } from './components/productlist2/productlist2.component';
import { BannerthreeComponent } from './components/bannerthree/bannerthree.component';
import { PagehomeComponent } from './components/pagehome/pagehome.component';
import { PageallproductComponent } from './components/pageallproduct/pageallproduct.component';
import { PagedetailproductComponent } from './components/pagedetailproduct/pagedetailproduct.component';
import { PagecartproductComponent } from './components/pagecartproduct/pagecartproduct.component';
import { CartoneComponent } from './components/cartone/cartone.component';
import { ClientsComponent } from './layout/clients/clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiginComponent } from './components/sigin/sigin.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmincontrolsComponent } from './components/admincontrols/admincontrols.component';
import { AdminaddComponent } from './components/adminadd/adminadd.component';
import { EditadminComponent } from './components/editadmin/editadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DautrangComponent,
    BannerComponent,
    BannertowComponent,
    AllproComponent,
    ProductoneComponent,
    FooterComponent,
    ProductlistComponent,
    ProductowComponent,
    Productlist2Component,
    BannerthreeComponent,
    PagehomeComponent,
    PageallproductComponent,
    PagedetailproductComponent,
    PagecartproductComponent,
    CartoneComponent,
    ClientsComponent,
    AddProductComponent,
    SiginComponent,
    SigupComponent,
    AdmincontrolsComponent,
    AdminaddComponent,
    AddCategoryComponent,
    EditadminComponent,
    AdminComponent,
    ProductListComponent,
    EditProductComponent,
    RegisterComponent,
    LoginComponent,
    ProductDetailsComponent,
    CategoryComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
