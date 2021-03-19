import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EventosService {
	publishEvent: BehaviorSubject<any>;

	constructor() { 
		this.publishEvent = new BehaviorSubject<any>([]);
	}

	public getEvent(): Observable<any>{
		return this.publishEvent.asObservable();
	}

	setEvent(evento:string,data:any=[]){
		console.log("evento ",evento);
		let datos = {tipo:evento,data:data};
		this.publishEvent.next(datos);
	}
}
