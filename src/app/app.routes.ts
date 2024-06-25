import { Routes } from '@angular/router';
import { FormContatoComponent } from './page/form-contato/form-contato.component';
import { ListaContatosComponent } from './page/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './page/perfil-contato/perfil-contato.component';

export const routes: Routes = [
  {
    path: 'forms',
    component: FormContatoComponent,
  },
  {
    path: 'lista-contatos',
    component: ListaContatosComponent,
  },
  { path: 'perfil-contato/:id', component: PerfilContatoComponent },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full',
  },
];
