import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  public backgroundImageUrl = "../../../assets/img/day_night/1.jpg"
  public services = []
  constructor() { }

  ngOnInit(): void {
    this.services = [
      {
        name: "web development and maintance",
        description: "Our company specializes in comprehensive web development and maintenance services. We have a skilled team of developers who create visually stunning and user-friendly websites tailored to your business needs. Our ongoing maintenance ensures that your website remains up-to-date, secure, and optimized for performance. We handle updates, bug fixes, and ensure compatibility across devices and browsers, allowing you to focus on your core business while we take care of your online presence.",
        img: "../../../assets/img/day_night/1.jpg"
      },
      {
        name: "web development and maintance",
        description: "Our company specializes in comprehensive web development and maintenance services. We have a skilled team of developers who create visually stunning and user-friendly websites tailored to your business needs. Our ongoing maintenance ensures that your website remains up-to-date, secure, and optimized for performance. We handle updates, bug fixes, and ensure compatibility across devices and browsers, allowing you to focus on your core business while we take care of your online presence.",
        img: "../../../assets/img/day_night/5.jpg"
      },
      {
        name: "web development and maintance",
        description: "Our company specializes in comprehensive web development and maintenance services. We have a skilled team of developers who create visually stunning and user-friendly websites tailored to your business needs. Our ongoing maintenance ensures that your website remains up-to-date, secure, and optimized for performance. We handle updates, bug fixes, and ensure compatibility across devices and browsers, allowing you to focus on your core business while we take care of your online presence.",
        img: "../../../assets/img/day_night/10.jpg"
      },
      {
        name: "web development and maintance",
        description: "Our company specializes in comprehensive web development and maintenance services. We have a skilled team of developers who create visually stunning and user-friendly websites tailored to your business needs. Our ongoing maintenance ensures that your website remains up-to-date, secure, and optimized for performance. We handle updates, bug fixes, and ensure compatibility across devices and browsers, allowing you to focus on your core business while we take care of your online presence.",
        img: "../../../assets/img/day_night/15.jpg"
      },
      {
        name: "web development and maintance",
        description: "Our company specializes in comprehensive web development and maintenance services. We have a skilled team of developers who create visually stunning and user-friendly websites tailored to your business needs. Our ongoing maintenance ensures that your website remains up-to-date, secure, and optimized for performance. We handle updates, bug fixes, and ensure compatibility across devices and browsers, allowing you to focus on your core business while we take care of your online presence.",
        img: "../../../assets/img/day_night/20.jpg"
      },

    ]
  }

}
