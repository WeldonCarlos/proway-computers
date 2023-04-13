import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor( 
    private  snackBar: MatSnackBar) { }

    notificar(mesagem:string){
      this.snackBar.open(mesagem, "Ok",{
        duration: 2000,
        verticalPosition:"top",
        horizontalPosition:"center"
      });
    }
}