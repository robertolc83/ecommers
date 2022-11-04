//Creamos la interface Product para poder tipar el array product en component 
//y de esta manera tener un mayor control de los datos que vamos a ingresar en el
//array de objetos de tipo Product.
//la palabra export nos ayuda a poder importar la interface en otras clases 
export interface Product{
    name: string;
    price: number;
    image: string;
    //Ocupamos el simbolo ? para indicar que la variable category es opcional
    category?: string;
}