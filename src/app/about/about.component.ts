import { Component, OnInit } from '@angular/core';

interface Company {
  name: string,
  title: string,
  description: string,
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  onSelectCompany: boolean = false;
  companyTitle: string = "";
  text: string = "";
  companies: Company[] = [
    {
      name: "Edgeverve",
      title: "Member of Technical Staff",
      description: "I am a part of the AssistEdge RPA product in the Discover team. My team works on finding processes which can be automated in large organisations and generating insights about them."
    },
    {
      name: "Hono.ai",
      title: "Software Engineering Intern",
      description: "My project was to add a dashboard to the company's product which was an HR solution for enterprises. I designed, developed the application and tested data for leave, attrition, finance etc. teams on it. My project, which was initially an internal project, was subsequently opened to the company's clients and I was offered a PPO."
    },
    {
      name: "WorldQuant LLC",
      title: "Virtual Research Consultant",
      description: "I worked part-time during college on building alphas which were used to classify stocks of different markets and then assign weights to them and simulate them on the basis of historical data."
    },
  ]
  constructor() { }
  func(ind: number){
    this.text = this.companies[ind].description;
    this.companyTitle = this.companies[ind].name;
    this.onSelectCompany = true;
  }
  ngOnInit(): void {
  }

}
