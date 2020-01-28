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
        },
        {
          artist: {
            id: 119110,
            imageUrl: null,
            images: [],
            name: "Camarade"
          },
          catNumber: "5056317186963",
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
          id: 165991,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165991.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/165991.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/165991.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165991.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/165991.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/165991.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/165991.jpg",
              width: 2000
            }
          ],
          label: {
            id: 13547,
            imageUrl: null,
            images: [],
            name: "Duke's Distribution"
          },
          releaseDate: "2020-04-24T00:00:00Z",
          title: "Orwellian",
          totalLength: 761000,
          trackCount: 2,
          type: "single"
        },
        {
          artist: {
            id: 68453,
            imageUrl: null,
            images: [],
            name: "John Carroll Kirby"
          },
          catNumber: "STH2417",
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
            },
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            }
          ],
          id: 167777,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167777.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167777.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167777.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167777.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167777.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167777.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167777.jpg",
              width: 2000
            }
          ],
          label: {
            id: 278,
            imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/l/l/278-1.png",
            images: [
              {
                size: "xss",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/s/278-1.png",
                width: 80
              },
              {
                size: "xs",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/m/278-1.png",
                width: 125
              },
              {
                size: "s",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/l/278-1.png",
                width: 250
              },
              {
                size: "m",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/g/278-1.png",
                width: 500
              },
              {
                size: "l",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/b/278-1.png",
                width: 1000
              },
              {
                size: "xl",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/2000/278-1.png",
                width: 2000
              }
            ],
            name: "Stones Throw Records"
          },
          releaseDate: "2020-04-17T00:00:00Z",
          title: "My Garden",
          totalLength: 1926000,
          trackCount: 9,
          type: "album"
        },
        {
          artist: {
            id: 59056,
            imageUrl: null,
            images: [],
            name: "Grant"
          },
          catNumber: "5056317186734",
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
          id: 165984,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165984.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/165984.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/165984.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165984.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/165984.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/165984.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/165984.jpg",
              width: 2000
            }
          ],
          label: {
            id: 13546,
            imageUrl: null,
            images: [],
            name: "Grant"
          },
          releaseDate: "2020-04-10T00:00:00Z",
          title: "Grant 004",
          totalLength: 882000,
          trackCount: 2,
          type: "single"
        },
        {
          artist: {
            id: 59075,
            imageUrl: null,
            images: [],
            name: "Jackie Lynn"
          },
          catNumber: "781484076827",
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
            },
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167870,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167870.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167870.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167870.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167870.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167870.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167870.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167870.jpg",
              width: 2000
            }
          ],
          label: {
            id: 3680,
            imageUrl: null,
            images: [],
            name: "Drag City Records"
          },
          releaseDate: "2020-04-10T00:00:00Z",
          title: "Jacqueline",
          totalLength: 2299000,
          trackCount: 9,
          type: "album"
        },
        {
          artist: {
            id: 22002,
            imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/a/l/22002.jpg",
            images: [
              {
                size: "xss",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/a/s/22002.jpg",
                width: 80
              },
              {
                size: "xs",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/a/m/22002.jpg",
                width: 125
              },
              {
                size: "s",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/a/l/22002.jpg",
                width: 250
              },
              {
                size: "m",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/a/g/22002.jpg",
                width: 500
              },
              {
                size: "l",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/a/b/22002.jpg",
                width: 1000
              },
              {
                size: "xl",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/a/2000/22002.jpg",
                width: 2000
              }
            ],
            name: "Thundercat"
          },
          catNumber: "BFDNL100",
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
              code: "WAV 24bit",
              distribution: "digital",
              family: "WAV 24bit",
              variant: null
            },
            {
              code: "FLAC",
              distribution: "digital",
              family: "FLAC",
              variant: null
            },
            {
              code: "Vinyl1×LP, Coloured Vinyl",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP, Coloured Vinyl"
            },
            {
              code: "Vinyl1×LP, Coloured Vinyl",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP, Coloured Vinyl"
            },
            {
              code: "Vinyl1×LP, Coloured Vinyl",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP, Coloured Vinyl"
            },
            {
              code: "Vinyl1×LP, Special Edition",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP, Special Edition"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 165924,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165924.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/165924.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/165924.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165924.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/165924.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/165924.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/165924.jpg",
              width: 2000
            }
          ],
          label: {
            id: 2190,
            imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/l/l/2190.jpg",
            images: [
              {
                size: "xss",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/s/2190.jpg",
                width: 80
              },
              {
                size: "xs",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/m/2190.jpg",
                width: 125
              },
              {
                size: "s",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/l/2190.jpg",
                width: 250
              },
              {
                size: "m",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/g/2190.jpg",
                width: 500
              },
              {
                size: "l",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/b/2190.jpg",
                width: 1000
              },
              {
                size: "xl",
                url: "https://d1rgjmn2wmqeif.cloudfront.net/l/2000/2190.jpg",
                width: 2000
              }
            ],
            name: "Brainfeeder"
          },
          releaseDate: "2020-04-03T00:00:00Z",
          title: "It Is What It Is",
          totalLength: 2249000,
          trackCount: 15,
          type: "album"
        },
        {
          artist: {
            id: 119793,
            imageUrl: null,
            images: [],
            name: "Wilma Archer"
          },
          catNumber: "WEIRD112D",
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
            },
            {
              code: "Vinyl1×LP + 12″",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP + 12″"
            },
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "Vinyl1×LP, Limited Edition",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP, Limited Edition"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167545,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167545.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167545.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167545.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167545.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167545.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167545.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167545.jpg",
              width: 2000
            }
          ],
          label: {
            id: 3108,
            imageUrl: null,
            images: [],
            name: "Weird World"
          },
          releaseDate: "2020-04-03T00:00:00Z",
          title: "A Western Circular",
          totalLength: 2411000,
          trackCount: 10,
          type: "album"
        },
        {
          artist: {
            id: 25374,
            imageUrl: null,
            images: [],
            name: "Mick Harvey"
          },
          catNumber: "STUMM448",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167565,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167565.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167565.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167565.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167565.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167565.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167565.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167565.jpg",
              width: 2000
            }
          ],
          label: {
            id: 1830,
            imageUrl: null,
            images: [],
            name: "Mute"
          },
          releaseDate: "2020-04-03T00:00:00Z",
          title: "Waves Of Anzac/The Journey",
          totalLength: null,
          trackCount: 0,
          type: "album"
        },
        {
          artist: {
            id: 10553,
            imageUrl: null,
            images: [],
            name: "Maserati"
          },
          catNumber: "TRR338digital",
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
            },
            {
              code: "Vinyl1xLP, Limited Coloured",
              distribution: "physical",
              family: "Vinyl",
              variant: "1xLP, Limited Coloured"
            },
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167673,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167673.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167673.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167673.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167673.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167673.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167673.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167673.jpg",
              width: 2000
            }
          ],
          label: {
            id: 1891,
            imageUrl: null,
            images: [],
            name: "Temporary Residence Ltd."
          },
          releaseDate: "2020-04-03T00:00:00Z",
          title: "Enter The Mirror",
          totalLength: 2322000,
          trackCount: 7,
          type: "album"
        },
        {
          artist: {
            id: 51270,
            imageUrl: null,
            images: [],
            name: "Rowland S. Howard"
          },
          catNumber: "RSH2",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "Vinyl2×LP, Limited Coloured",
              distribution: "physical",
              family: "Vinyl",
              variant: "2×LP, Limited Coloured"
            },
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167731,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167731.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167731.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167731.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167731.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167731.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167731.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167731.jpg",
              width: 2000
            }
          ],
          label: {
            id: 1830,
            imageUrl: null,
            images: [],
            name: "Mute"
          },
          releaseDate: "2020-03-27T00:00:00Z",
          title: "Pop Crimes",
          totalLength: null,
          trackCount: 0,
          type: "album"
        },
        {
          artist: {
            id: 119108,
            imageUrl: null,
            images: [],
            name: "Theory of Movement"
          },
          catNumber: "5056317186956",
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
          id: 165987,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165987.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/165987.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/165987.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/165987.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/165987.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/165987.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/165987.jpg",
              width: 2000
            }
          ],
          label: {
            id: 13547,
            imageUrl: null,
            images: [],
            name: "Duke's Distribution"
          },
          releaseDate: "2020-03-27T00:00:00Z",
          title: "Complex Beings",
          totalLength: 764000,
          trackCount: 2,
          type: "single"
        },
        {
          artist: {
            id: 4882,
            imageUrl: null,
            images: [],
            name: "Bon Iver"
          },
          catNumber: "JAG343",
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
            },
            {
              code: "VinylEP",
              distribution: "physical",
              family: "Vinyl",
              variant: "EP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167309,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167309.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167309.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167309.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167309.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167309.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167309.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167309.jpg",
              width: 2000
            }
          ],
          label: {
            id: 2221,
            imageUrl: null,
            images: [],
            name: "Jagjaguwar"
          },
          releaseDate: "2020-03-27T00:00:00Z",
          title: "Blood Bank EP 10th Anniversary Edition",
          totalLength: 2124000,
          trackCount: 8,
          type: "album"
        },
        {
          artist: {
            id: 119153,
            imageUrl: null,
            images: [],
            name: "Simon Fisher Turner and Edmund de Waal"
          },
          catNumber: "STUMM439",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 166104,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/166104.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/166104.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/166104.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/166104.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/166104.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/166104.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/166104.jpg",
              width: 2000
            }
          ],
          label: {
            id: 1830,
            imageUrl: null,
            images: [],
            name: "Mute"
          },
          releaseDate: "2020-03-27T00:00:00Z",
          title: "A Quiet Corner In Time",
          totalLength: null,
          trackCount: 0,
          type: "album"
        },
        {
          artist: {
            id: 1721,
            imageUrl: null,
            images: [],
            name: "Baxter Dury"
          },
          catNumber: "HVNLP173DIG",
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
            },
            {
              code: "Vinyl1×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 156692,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/156692.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/156692.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/156692.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/156692.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/156692.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/156692.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/156692.jpg",
              width: 2000
            }
          ],
          label: {
            id: 2914,
            imageUrl: null,
            images: [],
            name: "Heavenly Recordings"
          },
          releaseDate: "2020-03-20T00:00:00Z",
          title: "The Night Chancers",
          totalLength: 1828000,
          trackCount: 10,
          type: "album"
        },
        {
          artist: {
            id: 120113,
            imageUrl: null,
            images: [],
            name: "Roger Eno and Brian Eno"
          },
          catNumber: "4837771",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "Vinyl2×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "2×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 168027,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/168027.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/168027.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/168027.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/168027.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/168027.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/168027.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/168027.jpg",
              width: 2000
            }
          ],
          label: {
            id: 1991,
            imageUrl: null,
            images: [],
            name: "Deutsche Grammaphon"
          },
          releaseDate: "2020-03-20T00:00:00Z",
          title: "Mixing Colours",
          totalLength: null,
          trackCount: 0,
          type: "album"
        },
        {
          artist: {
            id: 22467,
            imageUrl: null,
            images: [],
            name: "Container"
          },
          catNumber: "ALT52",
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
              code: "WAV 24bit",
              distribution: "digital",
              family: "WAV 24bit",
              variant: null
            },
            {
              code: "FLAC",
              distribution: "digital",
              family: "FLAC",
              variant: null
            },
            {
              code: "Vinyl1×LP, Coloured Vinyl",
              distribution: "physical",
              family: "Vinyl",
              variant: "1×LP, Coloured Vinyl"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 167551,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167551.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167551.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167551.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167551.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167551.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167551.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167551.jpg",
              width: 2000
            }
          ],
          label: {
            id: 2665,
            imageUrl: null,
            images: [],
            name: "Alter"
          },
          releaseDate: "2020-03-20T00:00:00Z",
          title: "Scramblers",
          totalLength: 1738000,
          trackCount: 8,
          type: "album"
        },
        {
          artist: {
            id: 22467,
            imageUrl: null,
            images: [],
            name: "Container"
          },
          catNumber: "ALT52",
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
          id: 167808,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167808.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167808.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167808.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167808.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167808.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167808.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167808.jpg",
              width: 2000
            }
          ],
          label: {
            id: 2665,
            imageUrl: null,
            images: [],
            name: "Alter"
          },
          releaseDate: "2020-03-20T00:00:00Z",
          title: "Scramblers",
          totalLength: 1738000,
          trackCount: 8,
          type: "album"
        },
        {
          artist: {
            id: 15529,
            imageUrl: null,
            images: [],
            name: "Christian Loffler"
          },
          catNumber: "Ki-025",
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
            },
            {
              code: "Vinyl2×LP",
              distribution: "physical",
              family: "Vinyl",
              variant: "2×LP"
            },
            {
              code: "CD",
              distribution: "physical",
              family: "CD",
              variant: null
            }
          ],
          id: 158372,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/158372.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/158372.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/158372.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/158372.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/158372.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/158372.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/158372.jpg",
              width: 2000
            }
          ],
          label: {
            id: 3637,
            imageUrl: null,
            images: [],
            name: "Ki Records"
          },
          releaseDate: "2020-03-20T00:00:00Z",
          title: "Lys",
          totalLength: 3241000,
          trackCount: 12,
          type: "album"
        },
        {
          artist: {
            id: 3924,
            imageUrl: null,
            images: [],
            name: "Plant43"
          },
          catNumber: "Sem069",
          catalog: {
            id: 1,
            name: "Bleep"
          },
          formats: [
            {
              code: "VinylEP",
              distribution: "physical",
              family: "Vinyl",
              variant: "EP"
            }
          ],
          id: 167155,
          imageUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167155.jpg",
          images: [
            {
              size: "xss",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/s/167155.jpg",
              width: 80
            },
            {
              size: "xs",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/m/167155.jpg",
              width: 125
            },
            {
              size: "s",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/l/167155.jpg",
              width: 250
            },
            {
              size: "m",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/167155.jpg",
              width: 500
            },
            {
              size: "l",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/b/167155.jpg",
              width: 1000
            },
            {
              size: "xl",
              url: "https://d1rgjmn2wmqeif.cloudfront.net/r/2000/167155.jpg",
              width: 2000
            }
          ],
          label: {
            id: 1912,
            imageUrl: null,
            images: [],
            name: "Semantica"
          },
          releaseDate: "2020-03-20T00:00:00Z",
          title: "Return To The Sentient City",
          totalLength: 479174,
          trackCount: 4,
          type: "ep"
        }
      ],
      summary: {
        limit: 20,
        page: 1,
        totalPages: 3540,
        totalResults: 70789
      }
    };
    return of(releases);
  }
}
