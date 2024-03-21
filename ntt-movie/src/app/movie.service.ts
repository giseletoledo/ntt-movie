import { Injectable } from '@angular/core';
import { Movie } from './core/movie';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ServerData {
  Search: Movie [];
  Error?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://www.omdbapi.com/'; 
  private apiKey = '7f301f97'

  constructor(private http: HttpClient) { }

  getMovieByTitle(query: string): Observable<Movie[]> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${query}`;

    return this.http.get<ServerData>(url).pipe(
      map(response => {
        if (response.Error) {
          console.error('Error from API:', response.Error);
          throw new Error('Erro na solicitação da API'); 
        }
        return response.Search || [];
      }),
      catchError((error) => {
        console.error('Ocorreu um erro:', error);
        throw new Error('Erro na solicitação da API');
      })
    );
  }

  getMovieDetails(imdbID: string): Observable<Movie> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&i=${imdbID}`;
    return this.http.get<Movie>(url).pipe(
      catchError((error) => {
        console.error('Ocorreu um erro:', error);
        throw 'Erro na solicitação da API'; 
      })
    );
  }
}

