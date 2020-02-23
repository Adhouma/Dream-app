import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dream } from './dream.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class DreamService {

    API = "http://localhost:8080";

    constructor(private http: HttpClient) { }

    getAllDreams = (): Observable<Dream[]> => {
        return this.http.get<Dream[]>(this.API + "/dreams");
    }

    saveDream = (dream: Dream) => {
        return this.http.post<Dream>(this.API + "/add-dream", dream);
    }

    updateDream = (id: number, dream: Dream) => {
        return this.http.put(this.API + "/update-dream/" + id, dream);
    }

    deleteDream = (id: number): Observable<any> => {
        return this.http.delete(this.API + "/delete-dream/" + id);
    }

}