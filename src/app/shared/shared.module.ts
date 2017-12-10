import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  ToasterModule,
  ToasterService
} from 'angular2-toaster/angular2-toaster';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { LoadingService } from './services/loading.service';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CarouselModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    NgxChartsModule
  ],
  declarations: [LoginRedirectComponent, LoaderComponent],
  exports: [
    CarouselModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToasterModule,
    LoginRedirectComponent,
    NgxChartsModule,
    LoaderComponent
  ],
  providers: [ToasterService, LoadingService]
})
export class SharedModule {}
