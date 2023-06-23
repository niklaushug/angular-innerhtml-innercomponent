import {Component} from '@angular/core';
import {TooltipComponent} from "./tooltip/tooltip.component";
import {RatingComponent} from "./rating/rating.component";

import { TableData, CellFormat } from "./table/table.component";

const tableData1: TableData = {
  header: [
    'InnerHtml',
    'Component'
  ],
  body: [
    [
      {
        content: '<span title="Smile">😄</span>',
        format: CellFormat.InnerHtml
      }, {
        content: {
          component: new TooltipComponent(),  // TODO do i really need keyword new and parentheses
          context: {
            placement: 'right'
          }
        },
        format: CellFormat.Tooltip
      }
    ], [
      {
        content: '<h6>Heading 3</h6>',
        format: CellFormat.InnerHtml
      }, {
        content: {
          component: new RatingComponent(),  // TODO do i really need keyword new and parentheses
          context: {
            max: 5,
            rate: 2
          }
        },
        format: CellFormat.Rating
      }
    ]
  ]
}

const tableData2: TableData = {
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
        format: CellFormat.Plain
      }, {
      content: '40',
      format: CellFormat.Plain
    }, {
      content: '98',
      format: CellFormat.Percentage
    }, {
      content: '<span title="Smile">😄</span>',
      format: CellFormat.InnerHtml
    }, {
      content: {
        component: new TooltipComponent(),  // TODO do i really need keyword new and parentheses
        context: {
          placement: 'right'
        }
      },
      format: CellFormat.Tooltip
    }
    ], [
      {
        content: 'Rita',
        format: CellFormat.Plain
      }, {
        content: '35',
        format: CellFormat.Plain
      }, {
        content: '77',
        format: CellFormat.Percentage
      }, {
        content: '<h6>Heading 3</h6>',
        format: CellFormat.InnerHtml
      }, {
        content: {
          component: new RatingComponent(),  // TODO do i really need keyword new and parentheses
          context: {
            max: 5,
            rate: 2
          }
        },
        format: CellFormat.Rating
      }
    ], [
      {
        content: 'Bruno',
        format: CellFormat.Plain
      }, {
        content: '65',
        format: CellFormat.Plain
      }, {
        content: '53',
        format: CellFormat.Percentage
      }, {
        content: {
          component: new TooltipComponent(),  // TODO do i really need keyword new and parentheses
          context: {
            placement: 'bottom'
          }
        },
        format: CellFormat.Tooltip
      }, {
        content: {
          component: new RatingComponent(),  // TODO do i really need keyword new and parentheses
          context: {
            max: 5,
            rate: 2
          }
        },
        format: CellFormat.Rating
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
