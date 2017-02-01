import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CellComponent } from './components/cell/cell.component';

import { ControlsComponent } from './components/controls/controls.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/score/score.component';

import { Ng2MobxModule } from 'ng2-mobx';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    ControlsComponent,
    GameComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2MobxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
