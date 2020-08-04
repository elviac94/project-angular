import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public pageInfoService: PageInfoService) { }

  ngOnInit(): void {
  }

}
