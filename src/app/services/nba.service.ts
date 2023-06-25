import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable()
export class NbaService {

    http = inject(HttpClient)
    #API: string = 'https://www.balldontlie.io/api/v1/'


    teams$ = this.http.get<any>(`${this.#API}/teams`).pipe(
        map((response) => response?.data)
    )


    players$ = this.http.get<any>(`${this.#API}/players`).pipe(
        map((response) => response?.data)
    )

    stats$ = this.http.get<any>(`${this.#API}/players/47`).pipe(
        map((response) => response)
    )


}

