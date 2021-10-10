import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private _country: string = "IN";
  private _category: String = "general";
  public get category(): String {
    return this._category;
  }
  public set category(value: String) {
    this._category = value;
  }
  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }
}
