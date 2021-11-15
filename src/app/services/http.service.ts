import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Deputado } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getDeputadoList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Deputado>> {
    let params = new HttpParams();

    if (search) {
      params = new HttpParams().set('search', search)
    }

    return this.http.get<APIResponse<Deputado>>(`${env.BASE_URL}/deputados`, {
      params: params,
    });
  }

  getDeputadoDetails(id: string): Observable<Deputado> {
    const deputadoInfoRequest = this.http.get(`${env.BASE_URL}/deputados/${id}`);
    const deputadoDespesasRequest = this.http.get(`${env.BASE_URL}/deputados/${id}/despesas`);
    const deputadoEventosRequest = this.http.get(`${env.BASE_URL}/deputados/${id}/Eventos`);

    return forkJoin({
      deputadoInfoRequest,
      deputadoDespesasRequest,
      deputadoEventosRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['deputadoInfoRequest'],
          eventos: resp['deputadoEventosRequest']?.dados,
          despesas: resp['deputadoDespesasRequest']?.dados,
        }
      })
    )
  }

}
