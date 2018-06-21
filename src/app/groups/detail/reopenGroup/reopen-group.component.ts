/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GroupCommand} from '../../../services/group/domain/group-command.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsStore} from '../../store/index';
import {LOAD_ALL} from '../../store/commands/commands.actions';
import {Error} from '../../../services/domain/error.model';


@Component({
    templateUrl:'./reopen-group.component.html'
})

export class ReopeningGroupComponent{
 
  groupCommand:GroupCommand={
    action: 'REOPEN',
    note: '',
    createdBy: '',
    createdOn: ''
  }
  

  constructor(private router: Router, private route: ActivatedRoute, private store: GroupsStore) {}

  onSave(groupCommand: GroupCommand) {
    this.store.dispatch({ type: LOAD_ALL, payload: {
      groupCommand,
      activatedRoute: this.route
    } });
  }

    onCancel() {
        this.navigateAway();
      }
    
      navigateAway(): void {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
}


  