import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from "@angular/core"


@Component({
    selector: "grid-ui",
    templateUrl: "../UI/Grid.html"
})
export class GridComponent implements OnInit {
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    gridColumns: Array<Object> = new Array<Object>();
    // inputs
    gridData: Array<Object> = new Array<Object>();
    // inputs
    @Input("grid-entityname")
    EntityName: string = "";

    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {

        if (_gridData.length > 0) {
            // Fill column names in gridColumns collection
            if (this.gridColumns.length == 0) {
                var columnNames = Object.keys(_gridData[0]);
                this.gridColumns = new Array<Object>();
                for (var index in columnNames) {
                    this.gridColumns.push(columnNames[index]);
                }
            }
            this.gridData = _gridData;
        }
    }
    Select(_selected: Object) {
        this.selected.emit(_selected);
    }
    constructor() {
        console.log("Constructor fired"); // 1
    }
    ngOnInit() {
        console.log("On init"); // 2
    }
    ngAfterContentInit() {
        console.log("After content init"); //3
    }

    ngAfterViewInit() {
        console.log("After view init"); //4
    }
    ngDoCheck() {
        console.log("Do Check");
    }
    ngAfterContentChecked() {
        console.log("After content Checked");
    }
    ngAfterViewChecked() {
        console.log("After View  Checked");
    }
    ngOnChanges() {
        console.log("On changes fired");
    }
}