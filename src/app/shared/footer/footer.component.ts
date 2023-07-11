import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(
        private renderer: Renderer2,
    ) { }

    ngOnInit() {}
}
