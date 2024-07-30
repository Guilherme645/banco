import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = 'http://localhost:3000/clientes'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
  deleteClient(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  editarCliente(id: string, clienteAtualizado: Cliente): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, clienteAtualizado);
  }
  criarCliente(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/`;
    return this.http.post(url, cliente);
  }
}
