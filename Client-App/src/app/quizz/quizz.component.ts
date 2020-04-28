import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../add-question/add-question.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  // variables for counting points
  punctaj = 0;
  answer1;
  answer2;
  corectAnswer;
  isDisabled = false;

  page = 1;
  public questions = [];

  constructor(private http: HttpClient) {
    for (let i = 1; i <= 100; i++) {
      this.questions.push(`Question ${i}`);
    }
  }

  ngOnInit(): void {
    this.getQuestion().subscribe((data) => (this.questions = data));
  }
  getQuestion(): Observable<Question[]> {
    let url = 'http://localhost:8080/api/question';
    return this.http.get<Question[]>(url);
  }

  checkAnswer() {
    // if checkbox id = corect answer
    // punctaj ++
    if (this.corectAnswer) {
      this.punctaj++;
      this.corectAnswer = false;
      this.answer1 = false;
      this.answer2 = false;
    } else {
      this.corectAnswer = false;
      this.answer1 = false;
      this.answer2 = false;
    }
  }
}
