import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap,Params } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id = ""
  usuario = new UsuarioModel("","","","","","","","","")

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id_doc']
    if(this.id){
      console.log("editar");
      this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuario = data[0]
      })
    }else {
      console.log("crear");
    }
  }

  onSubmit() {
    console.log('onSubmit');

      if(this.usuario.id_doc){
        this.usuarioService.actualizarUsuario(this.usuario).subscribe(data =>{
          alert(data)
          this.router.navigate(['/usuarios'])
        })
      }else {
        console.log('crear');
        this.usuarioService.agregarUsuario(this.usuario).subscribe(data =>{
          alert(data)
          this.router.navigate(['/usuarios'])
        })
      }
    }
  }
