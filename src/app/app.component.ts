import {Component} from '@angular/core';
import {TooltipComponent} from "./tooltip/tooltip.component";
import {RatingComponent} from "./rating/rating.component";

import { TableDataI, TableCellFormatI } from "./table/table.component";

const tableData1: TableDataI = {
  header: [
    'InnerHtml',
    'Component'
  ],
  body: [
    [
      {
        content: '<span title="Smile">😄</span>',
        format: TableCellFormatI.InnerHtml
      }, {
        content: {
          component: TooltipComponent,
          context: {
            placement: 'right'
          }
        },
        format: TableCellFormatI.Component
      }
    ], [
      {
        content: '<h6>Heading 3</h6>',
        format: TableCellFormatI.InnerHtml
      }, {
        content: {
          component: RatingComponent,
          context: {
            max: 10,
            rate: 7
          }
        },
        format: TableCellFormatI.Component
      }
    ]
  ]
}

const tableData2: TableDataI = {
  header: [
    'Name',
    'Alter',
    'Auslastung',
    'InnerHtml',
    'Component'
  ],
  body: [
    [
      {
        content: 'Hans',
        format: TableCellFormatI.Plain
      }, {
      content: '40',
      format: TableCellFormatI.Plain
    }, {
      content: '98',
      format: TableCellFormatI.Percentage
    }, {
      content: '<span title="Smile">😄</span>',
      format: TableCellFormatI.InnerHtml
    }, {
      content: {
        component: TooltipComponent,
        context: {
          placement: 'top'
        }
      },
      format: TableCellFormatI.Component
    }
    ], [
      {
        content: 'Rita',
        format: TableCellFormatI.Plain
      }, {
        content: '35',
        format: TableCellFormatI.Plain
      }, {
        content: '77',
        format: TableCellFormatI.Percentage
      }, {
        content: '<h6>Heading 3</h6>',
        format: TableCellFormatI.InnerHtml
      }, {
        content: {
          component: RatingComponent,
          context: {
            max: 6,
            rate: 3
          }
        },
        format: TableCellFormatI.Component
      }
    ], [
      {
        content: 'Bruno',
        format: TableCellFormatI.Plain
      }, {
        content: '65',
        format: TableCellFormatI.Plain
      }, {
        content: '53',
        format: TableCellFormatI.Percentage
      }, {
        content: {
          component: TooltipComponent,
          context: {
            placement: 'bottom'
          }
        },
        format: TableCellFormatI.Component
      }, {
        content: {
          component: RatingComponent,
          context: {
            max: 5,
            rate: 2
          }
        },
        format: TableCellFormatI.Component
      }
    ]
  ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableData1 = tableData1
  tableData2 = tableData2
}
