import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

/*
Ajouter dans pages/formations/formations.component.ts :
  imports: [LifecycleComponent],
*/

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  // styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnChanges, OnInit, OnDestroy {
  @Input() data: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On change : ", changes);

    const previous = changes['data'].previousValue;
    console.log(previous);

    const newValue = changes['data'].currentValue;
    console.log(newValue);

    const isFirstChange = changes['data'].isFirstChange();
    console.log(isFirstChange);
  }

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log("On destroy");
  }

}
