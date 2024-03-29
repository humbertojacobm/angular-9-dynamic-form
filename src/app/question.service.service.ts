import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Humberto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'lasName',
        label: 'Last name',
        value: 'Mori',
        required: true,
        order: 4
      }),
      new DropdownQuestion({
        key: 'career',
        label: 'career description',
        options: [
          {key: '1',  value: 'Engineer'},
          {key: '2',  value: 'Doctor'},
          {key: '3',   value: 'Lawyer'},
          {key: '4', value: 'Business'}
        ],
        order: 5
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
