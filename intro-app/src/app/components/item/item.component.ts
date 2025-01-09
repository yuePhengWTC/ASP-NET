import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent implements OnInit{
  private _route = inject(ActivatedRoute);

  public itemId: string | null = null;

  public loaded: number = 0;

  ngOnInit(): void {
    console.log("ITEM COMPONENT");
    this.itemId = this._route.snapshot.paramMap.get('itemId');
    for(var i = 0; i<100; i++){
      this.loaded+=1;
    }
  }
}
