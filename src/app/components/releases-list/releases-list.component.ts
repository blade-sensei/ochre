import { Component, OnInit } from "@angular/core";
import { ReleaseService } from "src/app/services/release/release.service";
import { Release } from 'src/app/models/Release';

@Component({
  selector: "app-releases-list",
  templateUrl: "./releases-list.component.html",
  styleUrls: ["./releases-list.component.css"]
})
export class ReleasesListComponent implements OnInit {
  public releases: Release[];
  constructor(private releaseService: ReleaseService) {}

  ngOnInit() {
    this.releaseService.getMockRelease().subscribe(releases => {
      this.releases = releases.results;
      console.log(releases);
    });
  }
}
