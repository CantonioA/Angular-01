import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
    mensaje: 'Un gran pooder requiere una gran responsabilidad',
    autor: 'Ben Parker'
    };
    personajes: String [] = ['SpiderMan', 'Venon', 'Dr.Octopus'];
}