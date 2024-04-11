import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project-management-frontend';
  description: string = '';
  apiUrl: string = 'https://45uwsmdkr5b3btw4fy45wiyli40oagod.lambda-url.us-east-1.on.aws';
  responseData: string = ''; // Response data will be displayed here
  loading: boolean = false;

  constructor(private http: HttpClient) {}
  generateRequestHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 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',
      }),
    };
  }
  generateUserStories() {
    this.loading = true; // Set loading to true when the request is initiated
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-user-stories`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe((response: any) => {
        this.responseData = response.data.replace(/\n/g, '<br>'); // Assign only the 'data' property to responseData;
        this.loading = false; // Set loading to false when the request is completed
      });
  }

  generateAcceptanceCriteria() {
    this.loading = true; // Set loading to true when the request is initiated
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-acceptance-criteria`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe((response: any) => {
        this.responseData = response.data.replace(/\n/g, '<br>'); // Assign only the 'data' property to responseData;
        this.loading = false; // Set loading to false when the request is completed
      });
  }

  generateTestCases() {
    this.loading = true; // Set loading to true when the request is initiated
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-test-cases`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe((response: any) => {
        this.responseData = response.data.replace(/\n/g, '<br>'); // Assign only the 'data' property to responseData;
        this.loading = false; // Set loading to false when the request is completed
      });
  }

  generatePRD() {
    this.loading = true; // Set loading to true when the request is initiated
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-prd`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe((response: any) => {
        this.responseData = response.data.replace(/\n/g, '<br>'); // Assign only the 'data' property to responseData;
        this.loading = false; // Set loading to false when the request is completed
      });
  }
}
