import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-excluirCliente',
  templateUrl: './excluirCliente.component.html',
  styleUrls: ['./excluirCliente.component.css']
})
export class ExcluirClienteComponent  {
  constructor(
    public dialogRef: MatDialogRef<ExcluirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:string}
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}


