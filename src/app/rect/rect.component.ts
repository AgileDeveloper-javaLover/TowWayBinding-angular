import { Component ,effect,EventEmitter,Input,model,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // @Input({required:true}) size!: {width:string;height:string};
  // @Output() sizeChange = new EventEmitter<{width:string;height:string}>();

  size=model.required<{width:string;height:string}>();

  testValue:string | undefined;

  onReset() {
    // this.sizeChange.emit({width:'200',height:'200'});
    this.size.set({width:'200',height:'200'});
  }



}
