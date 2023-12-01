import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  constructor(private _applicationRef: ApplicationRef) {}
  public create(component: Type<any>): ComponentRef<Type<any>> {
    const viewContainerRef: ViewContainerRef =
      this._applicationRef.components[0].injector.get(ViewContainerRef);
    const componentRef: ComponentRef<Type<any>> =
      viewContainerRef.createComponent(component);
    return componentRef;
  }
}
