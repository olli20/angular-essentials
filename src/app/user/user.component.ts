import { Component, EventEmitter, Input, Output, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //     return 'assets/users/' + this.avat ar();
  //   }
  // );

  get imagePath() {
    return `./assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
