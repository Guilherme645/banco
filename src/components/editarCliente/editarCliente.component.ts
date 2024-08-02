import { ClientesService } from 'src/app/services/clientes.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/clientes';

@Component({
  selector: 'app-editarCliente',
  templateUrl: './editarCliente.component.html',
  styleUrls: ['./editarCliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  
  form!: FormGroup; // Declaring explicitly that form is of type FormGroup
  loading = false; // Variable to indicate loading state

  constructor(
    private dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private formBuilder: FormBuilder,
    private clientService: ClientesService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nome: [this.data.nome, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      endereco: [this.data.endereco, Validators.required], // endereco as a single string
      cnpj: [this.data.cnpj, Validators.required],
      razaoSocial: [this.data.razaoSocial, Validators.required],
      quantidadeDeProjetos: [this.data.quantidadeDeProjetos, Validators.required]
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.loading = true; // Start loading
      const clienteAtualizado: Cliente = {
        id: this.data.id,
        nome: this.form.value.nome,
        email: this.form.value.email,
        endereco: this.form.value.endereco, // endereco as a single string
        cnpj: this.form.value.cnpj,
        razaoSocial: this.form.value.razaoSocial,
        quantidadeDeProjetos: this.form.value.quantidadeDeProjetos
      };

      if (clienteAtualizado.id) {
        this.clientService.editarCliente(clienteAtualizado.id, clienteAtualizado).subscribe(
          () => {
            this.loading = false;
            this.dialogRef.close(clienteAtualizado);
            window.location.reload();
          },
          (error) => {
            this.loading = false;
            console.error('Erro ao editar cliente:', error);
          }
        );
      } else {
        this.loading = false;
        console.error('ID do cliente não está definido.');
      }
    } else {
      console.error('Formulário inválido.');
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}