import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RoverServiceService } from './Services/rover-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cambium';
  output: any;
  addRoverForm: FormGroup = new FormGroup({});
  constructor(private roverService: RoverServiceService,
    private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.addRoverForm = this.formBuilder.group({
        'initialX': new FormControl(),
        'initialY': new FormControl(),
        'initialD': new FormControl(),
        'input': new FormControl()
      });
    }

    createRover(){

      this.roverService.saveRover(this.addRoverForm.value).subscribe(data => {
        console.log(data);
        this.output = data;
      }, err => {
      });
      console.log(this.addRoverForm.value);
    }
}

