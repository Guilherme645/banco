import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular animations

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChartModule } from 'primeng/chart';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

// Services
import { ConfirmationService, MessageService } from 'primeng/api';

// Routing Module
import { AppRoutingModule } from './app-routing.module';
import { ClientesComponent } from 'src/components/tabelas/clientes/clientes.component';
import { SidebarComponent } from 'src/components/tabelas/clientes/sidebar/sidebar.component';
import { PClientesComponent } from './pages/pClientes/pClientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
ClientesComponent,
SidebarComponent,
PClientesComponent

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Angular Material Modules
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

    // PrimeNG Modules
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ConfirmPopupModule,
    ChartModule,
    AvatarGroupModule,
    CalendarModule,
    StepsModule,
    DialogModule,
    FileUploadModule,
    TagModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    RatingModule,
    ToolbarModule,
    StyleClassModule,
    AvatarModule,
    SidebarModule,
    RippleModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
