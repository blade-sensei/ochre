import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OauthService } from "../oauth/oauth.service";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReleaseService {
  // todo: should put this in environnement variable;
  private API_ENDPOINT = "https://api.ochre.io/v1";
  private SERVICE_URL = "music/releases";
  constructor(private http: HttpClient, private oauth: OauthService) {}

  // add model return
  getReleases() {
    return this.http.get(`${this.API_ENDPOINT}/${this.SERVICE_URL}`);
  }

  getMockRelease() {
    const releases = {
      results: [
        {
          artist: {
            id: 59056,
            imageUrl: null,
            images: [],
            name: "Grant"
          },
          catNumber: "5056317186758",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "MP3",
              distribution: "digital",
              family: "MP3",
              variant: null
            },
            {
              code: "WAV",
              distribution: "digital",
              family: "WAV",
              variant: null
            },
            {
              code: "FLAC",
              distribution: "digital",
              family: "FLAC",
              variant: null
            }
          ],
          id: 165992,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165992.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/165992.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/165992.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165992.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/165992.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/165992.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/165992.jpg",
              width: 2000
            }
          ],
          label: {
            id: 13546,
            imageUrl: null,
            images: [],
            name: "Grant"
          },
          releaseDate: "2020-06-12T00:00:00Z",
          title: "Grant 006",
          totalLength: 1048000,
          trackCount: 2,
          type: "single"
        },
        {
          artist: {
            id: 59056,
            imageUrl: null,
            images: [],
            name: "Grant"
          },
          catNumber: "5056317186741",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "MP3",
              distribution: "digital",
              family: "MP3",
              variant: null
            },
            {
              code: "WAV",
              distribution: "digital",
              family: "WAV",
              variant: null
            },
            {
              code: "FLAC",
              distribution: "digital",
              family: "FLAC",
              variant: null
            }
          ],
          id: 165985,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165985.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/165985.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/165985.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165985.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/165985.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/165985.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/165985.jpg",
              width: 2000
            }
          ],
          label: {
            id: 13546,
            imageUrl: null,
            images: [],
            name: "Grant"
          },
          releaseDate: "2020-05-08T00:00:00Z",
          title: "Grant 005",
          totalLength: 1260000,
          trackCount: 3,
          type: "single"
        }
      ],
      summary: {
        limit: 2,
        page: 1,
        totalPages: 35386,
        totalResults: 70772
      }
    };
    return of(releases);
  }
}
