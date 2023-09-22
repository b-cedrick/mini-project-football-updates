import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class CustomUnsubscriber implements OnDestroy {
  unsubscribe$ = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /* **************** */
  /*
  // ADD "super()" IN THE CONSTRUCTOR OF THE CHILD CLASS BEFORE USING "this" keyword
  // ADD THE FOLLOWING CODE TO OVERRIDE "ngOnDestroy" FUNCTION IF NEEDED

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    //Here come the code you want to add on the overrided ngOndestry function
  }

  */
  /* **************** */
}
