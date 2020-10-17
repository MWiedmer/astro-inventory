import { Component, OnInit } from '@angular/core';
import { NasaserviceService } from '../nasaservice.service';
import { AstronomyPicture } from '../astronomyPicture';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  picture: AstronomyPicture;

  constructor(private service: NasaserviceService) { }

  ngOnInit(): void {
	console.log('LandingPage: loading Astronomy Pic of the Day');
	 this.service.getPicture()
      .subscribe(picture => (this.picture = picture));
  }

}
