import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  
  cardImage:string = 'src/assets/chatgpt.jpeg'
  cardTitle:string = 'How ChatGPT can change medical education'
  cardText:string = 'ChatGPT'
  cardLink:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
