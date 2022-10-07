import { Component, OnInit } from '@angular/core';
import { PressupostService } from '../services/pressupost.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent implements OnInit {

  constructor(
    public pressupostService: PressupostService
  ) { }

  

  ngOnInit(): void {
  }

}
