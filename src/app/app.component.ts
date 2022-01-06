import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Practice'
  subTitle = 'My Plan'
  goals = ['Sign up for a MCS', 'Learn Angular', 'Organize GitHub', '5 Year Plan', 'New job or promotion to SDK/Product']
}
