import { Component,OnInit } from '@angular/core';

import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.component.html',
  styleUrls: ['./registro-medico.component.css']
})
export class RegistroMedicoComponent implements OnInit {
  usuario = new UsuarioModel("","","","","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuarioService.agregarDoc(this.usuario).subscribe(data => {
      alert(data);
    })
  }

}
