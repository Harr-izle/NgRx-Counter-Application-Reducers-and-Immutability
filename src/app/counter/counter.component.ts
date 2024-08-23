import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppState } from '../states/app.state';
import { selectCount, selectCounterHistory } from '../states/counter/counter.selector';
import { increment, decrement, reset, setCount, incrementBy, decrementBy, multiply, undo } from '../states/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, FormsModule,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;
  history$: Observable<number[]>;
  initialCount!: number;
  currentCount: number = 0;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
    this.history$ = this.store.select(selectCounterHistory);
    this.count$.subscribe(count => this.currentCount = count);
  }

  increment() {
    this.store.dispatch(increment({ count: this.currentCount + 1 }));
  }

  decrement() {
    this.store.dispatch(decrement({ count: Math.max(0, this.currentCount - 1) }));
  }

  reset() {
    this.store.dispatch(reset());
    this.initialCount = 0;
  }

  onSetCount() {
    this.store.dispatch(setCount({ count: this.initialCount }));
  }

  onIncrementBy() {
    this.store.dispatch(incrementBy({ amount: this.initialCount, count: this.currentCount + this.initialCount }));
  }

  onDecrementBy() {
    this.store.dispatch(decrementBy({ amount: this.initialCount, count: Math.max(0, this.currentCount - this.initialCount) }));
  }

  onMultiply() {
    this.store.dispatch(multiply({ factor: this.initialCount, count: this.currentCount * this.initialCount }));
  }

  onUndo() {
    this.store.dispatch(undo());
  }
}