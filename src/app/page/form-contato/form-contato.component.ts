import { Component } from '@angular/core';
import { ContainerComponent } from '../../component/container/container.component';
import { SeparadorComponent } from '../../component/separador/separador.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-contato',
  standalone: true,
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css',
  imports: [
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
  ],
})
export class FormContatoComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }
  salvarContato() {
    console.log(this.contatoForm.value);
  }
  cancelar() {
    console.log('cancelado');
  }
}
