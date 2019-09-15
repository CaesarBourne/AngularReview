import { Injectable } from "@angular/core";
import Hero from "./Hero";
import { HeroList } from "./mock-heroes";
import { Observable, of, from } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MessageService } from "./message.service";
import { HttpClientBackendService } from "angular-in-memory-web-api";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export default class HeroService {
  private heroesurl = "api/heroes";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  hero: Hero[] = HeroList;

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage("Message as been added ologbeni");
    return this.http.get<Hero[]>(this.heroesurl).pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError<Hero[]>("get Heroes", []))
    );
    // return of(HeroList);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed:  ${error.message}`);

      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    // this.messageService.addMessage(`fetched HERO WITH ID ${id}`);
    const url = `${this.heroesurl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Na couldnt get hero of id ${id}`)),
      catchError(this.handleError<Hero>(`get Hero of id ${id}`))
    );
    //  of(this.hero.find(her=> id === her.id));
  }

  

  updateHero(hero: Hero): Observable<any> {
    // this.messageService.addMessage(`Hero has g beem gotten`);
    return this.http.put(this.heroesurl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero gotten of id=${hero.id}`)),
      catchError(this.handleError<any>("update hero error"))
    );
  }

  searchItem(term: string): Observable<any>{
    if(!term.trim()){
      return of([])
    }
    return this.http.get(``);
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesurl, hero, this.httpOptions)
    .pipe(
      tap((newHero: Hero) =>this.log(`New hero added`),
      catchError(this.handleError<any>("Add a new Hero")))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero>{
    const id = typeof(hero) === "number" ? hero: hero.id;
    const url  = `${this.heroesurl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions)
    .pipe(
      tap(),
      catchError(this.handleError<any>("Deleting unsuccessful"))
    )
  }

  private log(message: string) {
    this.messageService.addMessage(`The logged message is: ${message}`);
  }
}
