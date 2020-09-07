import { Observable } from 'rxjs';

export interface IRate {
  symbol: string;
  bid$: Observable<number>;
  ask$: Observable<number>;
}
