import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  usuario: any[];
  constructor(private route: Router) { }

  ngOnInit() {
    this.listarClientes();
  }

  async listarClientes(){
    const requestOptions = {
      method: 'GET',
    };

    const datos= await fetch('http://192.168.2.17:8080/rest/kevin/listar', requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .catch(error => console.log('error', error));
    this.usuario=datos;
    console.log('Usuarios Listados',this.usuario);
  }

  crearUsuario() {
    this.route.navigate(['crear-usuario']);
  }
}

