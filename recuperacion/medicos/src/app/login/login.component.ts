import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new UsuarioModel("","","","","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    let a=this.usuarioService.loginUsuario(this.usuario).subscribe(data=>  {
      alert(data)
      if(data=="Bienvenido"){
        this.router.navigate(['navegacion'])
      }
    })
  }

}
