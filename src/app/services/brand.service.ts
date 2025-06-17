import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brand } from '../interfaces/brand.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  //Listado de categorias
  public getBrands(): Observable<brand[]> {
    return this.http.get<brand[]>(environment.api.brands);
  }

  /*
  public postBrand(brand:Brand):Observable<Brand>{
    return this.http.post<Brand>(this.urlApi, brand);
  }
  */

  //Metodo par acrear una marca con logo (envia FormData)
  public postBrand(formData: FormData): Observable<any> {
    return this.http.post(environment.api.brands, formData);
  }
}
