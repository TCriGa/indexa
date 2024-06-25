import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../component/container/container.component';
import { SeparadorComponent } from '../../component/separador/separador.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { PerfilContatoComponent } from '../perfil-contato/perfil-contato.component';

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
    PerfilContatoComponent,
  ],
})
export class FormContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) {}

  ngOnInit() {
    this.inicializarForm();
  }

  inicializarForm() {
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
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    });
  }
  cancelar() {
    this.contatoForm.reset();
  }
}
