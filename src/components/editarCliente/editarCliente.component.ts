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
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.populateForm();
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

  private populateForm(): void {
    if (this.data) {
      this.form.patchValue({
        nome: this.data.nome,
        email: this.data.email,
        cnpj: this.data.cnpj,
        razaoSocial: this.data.razaoSocial,
        quantidadeDeProjetos: this.data.quantidadeDeProjetos,
        endereco: this.data.endereco
      });
    }
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedCliente: Cliente = {
        id: this.data.id,  // Preserve the ID for updating
        nome: this.form.value.nome,
        email: this.form.value.email,
        cnpj: this.form.value.cnpj,
        razaoSocial: this.form.value.razaoSocial,
        quantidadeDeProjetos: this.form.value.quantidadeDeProjetos,
        endereco: this.form.value.endereco
      };

      this.clientesService.atualizarCliente(updatedCliente).subscribe(
        () => {
          this.dialogRef.close(updatedCliente);
          window.location.reload(); // Reload the page to reflect changes
        },
        (error) => {
          console.error('Erro ao atualizar cliente:', error);
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