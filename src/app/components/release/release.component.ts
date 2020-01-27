import { Component, OnInit, Input } from '@angular/core';
import { Release } from 'src/app/models/Release';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {
  @Input()
  public release: Release;
  constructor() { }

  ngOnInit() {
  }

}
