import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../program.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.css']
})

export class ArtifactComponent implements OnInit {
  public artifactsResult:any;
  public statResult:any;
  private showId: boolean = false;
  private showLabel:string = 'More';
  constructor(public artifacts:ProgramService) { 
    this.loadArtifacts();
    this.loadStats();
  }

  public loadArtifacts() {
    this.artifacts.getPrograms().subscribe((res: any) => {
      this.artifactsResult = res;
    });
  }

  public loadStats() {
    this.artifacts.getStats().subscribe((res: any) => {
      this.statResult = res;
    });
  }

  ngOnInit() {
  }

}
