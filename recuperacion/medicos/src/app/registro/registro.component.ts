import { Component,OnInit } from '@angular/core';

import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario = new UsuarioModel("","","","","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
      alert(data);
      this.router.navigate(['login'])
    })
  }

}
