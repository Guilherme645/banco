import { ClientesService } from 'src/app/services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from 'src/app/clientes';

@Component({
  selector: 'app-criarCliente',
  templateUrl: './criarCliente.component.html',
  styleUrls: ['./criarCliente.component.css']
})
export class CriarClienteComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CriarClienteComponent>,
    private formBuilder: FormBuilder,
    private ClientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      endereco: this.formBuilder.group({
        rua: [''],
        numero: [''],
        cidade: [''],
        estado: [''],
        cep: ['']
      })
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const novoCliente: Cliente = {
        id: undefined,
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

      this.ClientesService.criarCliente(novoCliente).subscribe(
        () => {
          this.dialogRef.close(novoCliente);
          window.location.reload(); // Recarrega a página
        },
        (error) => {
          console.error('Erro ao criar cliente:', error);
        }
      );
    } else {
      console.error('Formulário inválido.');
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
