import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  questionModel: Question = {
    Question: '',
    CorectAnswer: '',
    Answer1: '',
    Answer2: '',
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendQuestion(): void {
    let url = 'http://localhost:8080/api/question';
    this.http.post(url, this.questionModel).subscribe(
      (res) => {
        alert('Question added');
      },
      (err) => {
        alert('Error');
      }
    );
    location.reload();
  }
}

export interface Question {
  Question: string;
  CorectAnswer: string;
  Answer1: string;
  Answer2: string;
}
