import { Component, OnInit } from '@angular/core';
import { routerInterface } from '../course';
import { Router1Service } from '../router1.service';

@Component({
  selector: 'app-student',
  template: `
    <h2>
      Student component working successfully !
    </h2>
    {{errMsg}}
    <table align="center" border="1" >
      <tr align="center" class="id" >
        <td>Id</td>
        <td>Name</td>
        <td>Age</td>
        <td>Course</td>
        <td>Duration</td>
        <td>Fee</td>
      </tr>
      <tr *ngFor="let x of course" align="center">
        <td>{{x.id}}</td>
        <td>{{x.name}}</td>
        <td>{{x.course}}</td>
        <td>{{x.age}}</td>
        <td>{{x.duration}}</td>
        <td>{{x.fee}}</td>
      </tr>

    </table>
  `,
  styles: [`
  
  h2{
    color:orange;
    text-align:center;
  }
  
  table {
    color:white;
    border:2px solid green;
    border-collapse: collapse;
    background-color:pink;
    space:0px;
  }
  .id{
    color:black;
  }
  
  `]
})
export class StudentComponent implements OnInit {
  public course:routerInterface[]=[];
  public errMsg:routerInterface[]=[];


  constructor(private service:Router1Service) { }

  ngOnInit(): void {
    this.service.getCourse()
    .subscribe(
      data => this.course=data,
      error => this.errMsg = error
    )
  }

}
