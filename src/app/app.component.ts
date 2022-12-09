import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //VARIABLES
  selected = "";
  name = "";
  age = "";
  btnDisabled = false;

  //CREAMOS UN ARRAY 
  names: string[] = ["Abril","Fabian", "Alejandro"];
  newName = "";

  //CREAMOS UN OBJETO
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  //CREAMOS UN ARRAY DE OBJETOS TIPADO CON LA INTERFACE(MODELO) QUE CREAMOS EN Product.model.ts
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  //CLASE Person
  Person = {
    name: "Roberto",
    age: 38
  }

  //MÉTODOS

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  incrementaEdad(){
    this.Person.age += 1;
  }

  resetEdad(){
    this.Person.age = 0;
  }

  //Método que recibe el evento cuando se baja o sube el scroll
  onScroll(event: Event){
    //capturamos el evento como un html element
    const element = event.target as HTMLElement;
    //leer la posicion del scroll y la imprimimos en console
    console.log(element.scrollTop);
  }

  //Método que recibe el evento de un input cuando es modificado
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
  }

  //METODO QUE AGREGA UN VALOR AL ARREGLO names USANDO EL METODO push
  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }

  //MÉTODO QUE ELIMINA UN REGISTRO DEL ARRAY names
  deleteName(index: number){
    //DONDE INDEX ES EL INDICE DEL VALOR A ELIMINAR Y 1 EL NÚMERO DE REGISTROS A ELIMINAR EN ESTE CASO SOLO EL SELECCIONADO
    this.names.splice(index,1);
  }

}
