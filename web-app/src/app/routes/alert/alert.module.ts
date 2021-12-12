import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { AlertRoutingModule } from './alert-routing.module';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {AlertCenterComponent} from "./alert-center/alert-center.component";
import {AlertSettingComponent} from "./alert-setting/alert-setting.component";
import {AlertNoticeComponent} from "./alert-notice/alert-notice.component";
import {NzTagModule} from "ng-zorro-antd/tag";

const COMPONENTS: Type<void>[] = [
  AlertCenterComponent,
  AlertSettingComponent,
  AlertNoticeComponent
];

@NgModule({
  imports: [
    SharedModule,
    AlertRoutingModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzTagModule,
  ],
  declarations: COMPONENTS,
})
export class AlertModule { }
