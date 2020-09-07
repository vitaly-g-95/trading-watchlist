import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRate } from './irate';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private apiUrl = 'https://api.exchangeratesapi.io/latest';
  private itemsCount = 10;

  constructor(
    private http: HttpClient
  ) {}

  getRates(base = 'USD'): Observable<IRate[]> {
    return this.http.get(`${this.apiUrl}?base=${base}`).pipe(
      map((res: any) => {
        return Object.keys(res.rates).slice(0, this.itemsCount).map(key => {
          return this.mapRate(res.rates[key], base + key);
        });
      })
    );
  }

  getRate(from: string, to: string): Observable<IRate> {
    return this.http.get(`${this.apiUrl}?base=${from}&symbols=${to}`).pipe(
      map((res: any) => {
        return this.mapRate(res.rates[to], from + to);
      })
    );
  }

  private mapRate(rate: number, symbol: string): IRate {
    const bid$ = this.getVariableRate(rate, -2);
    const ask$ = this.getVariableRate(rate, 2);

    return { symbol, bid$, ask$ };
  }

  private getVariableRate(rate: number, maxPercents: number): Observable<number> {
    return new Observable<number>((observer: Observer<number>) => {
      this.changeRate(observer, rate, maxPercents);
    });
  }

  private changeRate(observer: Observer<number>, rate: number, maxPercents: number, first = true): void {
    const ms = first ? 0 : Math.ceil(Math.random() * 10) * 100;

    setTimeout(() => {
      const changedRate = rate + rate * Math.random() * maxPercents / 100;

      observer.next(changedRate);

      this.changeRate(observer, rate, maxPercents, false);
    }, ms);
  }
}
