import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Template Switcher!';
  content = {
    body: "Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body "
  };

blue=false;
red=false;
green=false;

  changeTemplate(templateType){
    if (templateType==1) {
      this.blue = true;
      this.red = false;
      this.green = false;
    }
    if (templateType==2) {
      this.blue = false;
      this.red = true;
      this.green=false;
    }
    if (templateType==3) {
      this.blue = false;
      this.red = false;
      this.green = true;
    }

        console.log(templateType);
  }

}
