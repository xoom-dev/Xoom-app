import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BannerComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [HeaderComponent, FooterComponent, BannerComponent]
})
export class ComponentsModule { }
