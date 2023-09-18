import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = "http://localhost:9300"

  constructor(private http: HttpClient) { }


  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/usuarios/registro`, usuario);
  }
   agregarDoc(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/doctores/registro`, usuario);
  }
  loginUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/usuarios/login`, usuario);
  }

  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(this.BASE_URL+'/doctores');
  }

  obtenerUsuario(id: string) {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/doctores/${id}`);
  }

  actualizarUsuario(usuario: UsuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar`,usuario)
  }

  borrarUsuario(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/doctores/borrar`)
  }
}


