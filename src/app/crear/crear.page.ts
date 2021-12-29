import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {crearusuario} from '../modelo/crear';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  usuario: crearusuario = new crearusuario();

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  registrarse(){
    console.log(this.usuario);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('cedula', this.usuario.cedula);
    urlencoded.append('nombre', this.usuario.nombre);
    urlencoded.append('password', this.usuario.password);
    urlencoded.append('correo', this.usuario.correo);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    fetch('http://192.168.2.17:8080/rest/kevin/create', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    console.log(this.usuario);
    this.route.navigate(['listar']);
  }
}
