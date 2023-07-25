import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  public currentHour;
  public bg_path;
  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {
    const currentDate = new Date();
    this.currentHour = currentDate.getHours();
  }

  ngOnInit() {
    this.bg_path = "../../../assets/img/day_night/" + this.currentHour + ".jpg"
    // const element = this.renderer.selectRootElement('#upper_part');
    // const imagePath = `url('${this.bg_path}')`; // Assuming this.bg_path contains the image path
    // this.renderer.setStyle(element, 'background-image', imagePath);
  }
  goToServicePage() {
    this.router.navigate(['/services']);
  }
  goToAcademyLanding() {
    this.router.navigate(['/academy']);
  }
}
