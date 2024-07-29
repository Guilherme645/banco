import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Ajuste o caminho conforme necessário
import { ClientesComponent } from 'src/components/tabelas/clientes/clientes.component';
import { PClientesComponent } from './pages/pClientes/pClientes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: PClientesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para a página de login
  { path: '**', redirectTo: '/login' } // Redireciona para a página de login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
