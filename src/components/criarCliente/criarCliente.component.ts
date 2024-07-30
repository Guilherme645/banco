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
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      quantidadeDeProjetos: ['', Validators.required],
      endereco: ['', Validators.required],
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const novoCliente: Cliente = {
        id: undefined,
        nome: this.form.value.nome,
        email: this.form.value.email,
        cnpj: this.form.value.cnpj,
        razaoSocial: this.form.value.razaoSocial,
        quantidadeDeProjetos: this.form.value.quantidadeDeProjetos,
        endereco: this.form.value.endereco
      };

      this.clientesService.criarCliente(novoCliente).subscribe(
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
