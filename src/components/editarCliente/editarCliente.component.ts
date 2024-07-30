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

  form!: FormGroup;
  loading = false;

  constructor(
    private dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private formBuilder: FormBuilder,
    private ClientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nome: [this.data.nome, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      telefone: [this.data.telefone, Validators.required],
      endereco: this.formBuilder.group({
        rua: [this.data.endereco?.rua],
        numero: [this.data.endereco?.numero],
        cidade: [this.data.endereco?.cidade],
        estado: [this.data.endereco?.estado],
        cep: [this.data.endereco?.cep]
      })
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.loading = true; // Start loading
      const clienteAtualizado: Cliente = {
        id: this.data.id,
        nome: this.form.value.nome,
        email: this.form.value.email,
        telefone: this.form.value.telefone,
        endereco: {
          rua: this.form.value.endereco.rua,
          numero: this.form.value.endereco.numero,
          cidade: this.form.value.endereco.cidade,
          estado: this.form.value.endereco.estado,
          cep: this.form.value.endereco.cep
        }
      };

      if (clienteAtualizado.id) {
        this.ClientesService.editarCliente(clienteAtualizado.id, clienteAtualizado).subscribe(
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
