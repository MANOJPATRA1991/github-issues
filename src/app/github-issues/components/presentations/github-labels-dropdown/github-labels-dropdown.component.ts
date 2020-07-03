import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { GithubLabel } from 'src/app/models/github-label.model';

@Component({
  selector: 'app-github-labels-dropdown',
  templateUrl: './github-labels-dropdown.component.html',
  styleUrls: ['./github-labels-dropdown.component.scss']
})
export class GithubLabelsDropdownComponent implements OnInit {

  @Input() labels: GithubLabel[] = [];
  @Output() labelSelect = new EventEmitter();

  selectedLabels: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(label: string) {
    const labelIndex = this.selectedLabels.indexOf(label);
    if (labelIndex === -1) {
      this.selectedLabels.push(label);
    } else {
      this.selectedLabels.splice(labelIndex, 1);
    }
  }

  onSubmit() {
    this.labelSelect.emit(this.selectedLabels);
  }

}
