import { Injectable } from "@angular/core";
import { TourService } from "../../services/tour.service";
import { TourActions } from "../Action/Tour.actions";
import { Action } from "@ngrx/store";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, map, mergeMap,of } from "rxjs";

    

