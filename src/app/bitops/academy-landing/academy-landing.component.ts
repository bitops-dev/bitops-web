import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-academy-landing',
  templateUrl: './academy-landing.component.html',
  styleUrls: ['./academy-landing.component.scss']
})
export class AcademyLandingComponent implements OnInit {
  constructor() { }
  public register_url = "https://www.edureka.co/community/179891/typescript-how-do-you-loop-through-a-dictionary"
  public cources = {
    "AWS cloud computing": {
      "Week 1": {
        "Day 1": "Introduction to AWS Cloud and Cloud Computing Concepts",
        "Day 2": "Project - Static Website Hosting on Amazon S3"
      },
      "Week 2": {
        "Day 1": "Introduction to AWS Cloud and Cloud Computing Concepts",
        "Day 2": "Project - Static Website Hosting on Amazon S3"
      },
    },
    "Angular web app development": {
      "Week 1": {
        "Day 1": "Introduction to AWS Cloud and Cloud Computing Concepts",
        "Day 2": "Project - Static Website Hosting on Amazon S3"
      },
      "Week 2": {
        "Day 1": "Introduction to AWS Cloud and Cloud Computing Concepts",
        "Day 2": "Project - Static Website Hosting on Amazon S3"
      },
    }
  }
  public selected_cource = {}
  public selected_cource_name = ""
  ngOnInit(): void {
  }
  clickSelectedCource(cource_name) {
    Swal.fire({
      title: 'Hi there, <br> help us to help you out.',
      text: "Please enter Phone number and name to continue.",
      showCancelButton: true,
      html:
        '<input id="name" class="swal2-input" placeholder="Name" required>' +
        '<input id="phone" class="swal2-input" placeholder="Phone Number" required>',

      focusConfirm: false,
      preConfirm: () => {
        const phone = (Swal.getPopup().querySelector('#phone') as HTMLInputElement).value;
        const name = (Swal.getPopup().querySelector('#name') as HTMLInputElement).value;
        return { phone: phone, name: name };
      },
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        const phoneInput = Swal.getPopup().querySelector('#phone') as HTMLInputElement;
        const nameInput = Swal.getPopup().querySelector('#name') as HTMLInputElement;

        confirmButton.disabled = true;

        const validateInputs = () => {
          confirmButton.disabled = !(phoneInput.value && nameInput.value);
        };

        phoneInput.addEventListener('input', validateInputs);
        nameInput.addEventListener('input', validateInputs);
      }

    }).then((result) => {
      if (result.isConfirmed) {
        const phone = result.value.phone;
        const name = result.value.name;
        // Do something with the phone number and name
        this.selected_cource_name = cource_name
        this.selected_cource = this.cources[cource_name]
        this.storeDetails(name, phone)
        this.openDetailedPopup()
      }
    });
  }
  storeDetails(name, phone) {

  }

  openDetailedPopup() {
    var conttent_div = ""
    for (let key in this.selected_cource) {
      var title = `<div style="background-color: coral; width: 100%;">
      <h2 class="title">`+ key + `</h2>
      </div>`
      var dayhtml = ""
      for (let day in this.selected_cource[key]) {
        dayhtml += `<h3 class="title">` + day + ` :
        `+ this.selected_cource[key][day] + `</h3>`
        console.log(day)
      }

      conttent_div += `
                    <div style="width: 100%;">
                        `+ title + `
                       `+ dayhtml + `
                    </div>
      `
    }
    console.log(conttent_div)
    var html_code = `<div class="text-left">
    <div class="col" *ngIf="selected_cource_name">
                <div class="row">
                    `+ conttent_div + `
                </div>
            </div>
    `;
    Swal.fire({
      title: this.selected_cource_name,
      html: html_code,
      width: '90%',
      heightAuto: false,
      showCancelButton: true,
      confirmButtonText: "Register"
    }).then((result) => {
      if (result.isConfirmed) {
        this.goToLink()
      }
    });

  }
  goToLink() {
    window.open(this.register_url, "_blank");
  }
}
