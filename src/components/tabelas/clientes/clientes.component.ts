import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Cliente } from 'src/app/clientes';
import { MatDialog } from '@angular/material/dialog';

import { ClientesService } from 'src/app/services/clientes.service';
import { EditarClienteComponent } from 'src/components/editarCliente/editarCliente.component';
import { CriarClienteComponent } from 'src/components/criarCliente/criarCliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes!: Cliente[];

  loading: boolean = true;

  dataSource: any;
  private apiUrl = 'http://localhost:3000';



  @ViewChild('dt2') dt2!: Table;

  constructor(private clientesService: ClientesService,
     private http: HttpClient
    ,private dialog: MatDialog) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar clientes', err);
        this.loading = false;
      }
    });
  }

  onGlobalFilterInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt2.filterGlobal(input.value, 'contains');
  }
  fetchClients(): void {
    this.clientesService.getClientes()
      .subscribe(
        (response: Cliente[]) => {
          this.clientes = response;
          console.log('Clientes carregados:', response);
        },
        (error) => {
          console.error('Erro ao buscar clientes:', error);
        }
      );
  }

  editClient(cliente: Cliente): void {
    const dialogRef = this.dialog.open(EditarClienteComponent, {
      width: '400px',
      data: cliente
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('O diálogo foi fechado', result);
    });
  }

  deleteClient(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.http.delete(`${this.apiUrl}/clientes/${id}`)
        .subscribe(
          () => {
            console.log(`Cliente com ID ${id} excluído com sucesso.`);
            this.fetchClients(); // Atualiza a lista de clientes
          },
          (error) => {
            console.error(`Erro ao excluir cliente com ID ${id}:`, error);
          }
        );
    }
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CriarClienteComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadClientes();
      }
    });
  }

  private loadClientes(): void {
    this.clientesService.getClientes().subscribe(clientes => {
      this.dataSource.data = clientes;
    });
  }
}
