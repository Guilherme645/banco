import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Ajuste o caminho conforme necessário
import { ClientesComponent } from 'src/components/tabelas/clientes/clientes.component';
import { PClientesComponent } from './pages/pClientes/pClientes.component';
import { PChamadosComponent } from './pages/p-chamados/p-chamados.component';
import { PProjetosComponent } from './pages/p-projetos/p-projetos.component';
import { PUsuariosComponent } from './pages/p-usuarios/p-usuarios.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ChartsComponent } from 'src/components/tabelas/charts/charts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: PClientesComponent },
  { path: 'chamados', component: PChamadosComponent },
  { path: 'projetos', component: PProjetosComponent },
  { path: 'usuarios', component: PUsuariosComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'tabela', component: ChartsComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para a página de login
  { path: '**', redirectTo: '/login' } // Redireciona para a página de login em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
