import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentComponent } from './payment/payment.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BannerComponent, PaymentComponent],
  imports: [
    CommonModule,
    TranslateModule,
    
  ],
  exports: [HeaderComponent, FooterComponent, BannerComponent, PaymentComponent],
  entryComponents: [PaymentComponent],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],

})
export class ComponentsModule { }
