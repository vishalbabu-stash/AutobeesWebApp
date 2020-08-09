import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// changes starts on 05aug2020
import { BrowserModule } from '@angular/platform-browser';
// changes ends on 05aug2020
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { HttpClientModule} from '@angular/common/http';
import { freeApiService} from './shared/freeapi.service';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms';


// import { EventsComponent } from './events/events.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
    // EventsComponent,
    // LoginComponent,
    // RegisterComponent


  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    // changes starts on 05aug2020
    BrowserModule,
    // changes ends on 0aug2020
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
