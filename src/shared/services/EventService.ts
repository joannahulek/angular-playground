import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class EventService{
  private subject = new Subject()

  emit(eventName: string, payload: any){
    this.subject.next({eventName, payload})
  }

  listen(eventName: string, callback: (event: any) => void){
    this.subject.asObservable().subscribe((nextObject: any) => {
      if (eventName == nextObject.eventName){
        callback(nextObject.payload)
      }
    })
  }
}
