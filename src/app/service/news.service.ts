import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { News } from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


   getNews():Observable<News[]>{

      return this.http.get<News[ ]>('');

   }
}
