import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {

  @Output() filterApply = new EventEmitter<any>();
  @Output() filterCancel = new EventEmitter<any>();
  @Output() sortByName = new EventEmitter<any>();

  genderList = [{gender: 'Male'}, {gender: 'Female'}];
  statusList = [{status: 'Alive'}, {status: 'Dead'}];

  selectedGenders = [];
  selectedStatuses = [];
  selectedName = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  applyFilter(): void {
    this.filterApply.emit({
      gender: this.selectedGenders,
      status: this.selectedStatuses,
      name: this.selectedName
    });
  }

  clearFilter(): void {
    this.filterCancel.emit();
  }

  private calculateInputParams(field: string, checked: boolean, value: string): void {
    if (checked) {
      this[field].indexOf(value) === -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter(item => item !== value);
    }
  }

  handleSortByName(): void {
    this.sortByName.emit();
  }

  handleChangeGender({target}): void {
    this.calculateInputParams('selectedGenders', target.checked, target.value);
  }

  handleChangeStatus({target}): void {
    this.calculateInputParams('selectedStatuses', target.checked, target.value);
  }
}
