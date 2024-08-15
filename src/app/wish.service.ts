import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {WishItem} from "../shared/models/whishItem";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {}

  private getStandardOptions(): any{
    return{
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
  }

  getWishes(){
    let options = this.getStandardOptions()
    // options.params = new HttpParams({fromObject:{format: 'json'}})
    return this.http.get("assets/wishes.json?format=json", options).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('Client or network error: ', error.error)
    } else {
      console.error('Server-side error: ', error.error)
    }

    return throwError(()=> new Error('Wish list not found'))
  }

  private addWish(wish: WishItem){
    let options = this.getStandardOptions()

    options.headers = options.headers.set('Authorisation', 'value-need-for-authorisation')
    this.http.post('assets/wishes.json', wish, options)
  }
}
