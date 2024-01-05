import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number  | undefined;

  constructor(){
    //No async
    //Before render
    //una vez
    console.log('constructor')
    console.log('--'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    console.log('ngOnChanges');
    console.log('--'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    //after render
    //corre una vez
    //async
    console.log('ngOnInit');
    console.log('--'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval')
    //   this.counter.update(statePrev => statePrev + 1)
    // }, 1000);
  }

  ngAfterViewInit(){
    //after Render
    //verifica si los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('--'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('--'.repeat(10));
    //window.clearInterval(this.counterRef);
  }

  doSomething(){
    console.log('change duration');
    //async
  }
}

