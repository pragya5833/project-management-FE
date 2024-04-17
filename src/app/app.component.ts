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
  apiUrl: string ='https://ipehhiuwkcldz2f3rsjoravhyq0kngtz.lambda-url.ap-south-1.on.aws';
  // apiUrl: string = 'http://localhost:3000'; // Updated to point to local server
  responseData: string = ''; // Response data will be displayed here
  loading: boolean = false;
  errorMessage: string = ''; // Store error messages

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
  // Example for all methods including generateUserStories, generateAcceptanceCriteria, etc.
  generateUserStories() {
    this.loading = true; // Set loading to true when the request is initiated
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-user-stories`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe({
        next: (response: any) => {
          this.responseData = response.data.replace(/\n/g, '<br>');
          this.loading = false;
          this.errorMessage = ''; // Clear previous error messages
        },
        error: (error) => {
          console.error('Failed to generate user stories:', error);
          this.errorMessage =
            'Failed to generate user stories. ' +
            (error.error?.message || error.message);
          this.loading = false;
        },
      });
  }

  generateAcceptanceCriteria() {
    this.loading = true;
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-acceptance-criteria`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe({
        next: (response: any) => {
          this.responseData = response.data.replace(/\n/g, '<br>');
          this.loading = false;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Failed to generate acceptance criteria:', error);
          this.errorMessage =
            'Failed to generate acceptance criteria. ' +
            (error.error?.message || error.message);
          this.loading = false;
        },
      });
  }

  generateTestCases() {
    this.loading = true;
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-test-cases`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe({
        next: (response: any) => {
          this.responseData = response.data.replace(/\n/g, '<br>');
          this.loading = false;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Failed to generate test cases:', error);
          this.errorMessage =
            'Failed to generate test cases. ' +
            (error.error?.message || error.message);
          this.loading = false;
        },
      });
  }

  generatePRD() {
    this.loading = true;
    const requestBody = { requirement: this.description };
    this.http
      .post(
        `${this.apiUrl}/generate-prd`,
        requestBody,
        this.generateRequestHeaders()
      )
      .subscribe({
        next: (response: any) => {
          this.responseData = response.data.replace(/\n/g, '<br>');
          this.loading = false;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Failed to generate PRD:', error);
          this.errorMessage =
            'Failed to generate PRD. ' +
            (error.error?.message || error.message);
          this.loading = false;
        },
      });
  }
}
