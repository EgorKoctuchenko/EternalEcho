import React, { useEffect, useRef, useState } from "react";
class Person {
  protected namePerson: string;
  protected atPerson: number;
  protected defPerson: number;
  protected moveOutPerson: number;
  protected critPerson: number;
  protected iconPerson: string;
  protected hpPerson: number;
  protected fullHpPerson: number;
  protected typePerson: string;

  constructor(
    namePerson: string,
    atPerson: number,
    defPerson: number,
    moveOutPerson: number,
    critPerson: number,
    iconPerson: string,
    hpPerson: number,
    fullHpPerson: number,
    typePerson: string
  ) {
    this.namePerson = namePerson;
    this.atPerson = atPerson;
    this.defPerson = defPerson;
    this.moveOutPerson = moveOutPerson;
    this.critPerson = critPerson;
    this.iconPerson = iconPerson;
    this.hpPerson = hpPerson;
    this.fullHpPerson = fullHpPerson;
    this.typePerson = typePerson;
  }
  public getNamePerson(): string {
    return this.namePerson;
  }
  public getAttackPerson(): number {
    return this.atPerson;
  }
  public getDefPerson(): number {
    return this.defPerson;
  }
  public getMoveOutPerson(): number {
    return this.moveOutPerson;
  }
  public getCritPerson(): number {
    return this.critPerson;
  }
  public getIconPerson(): string {
    return this.iconPerson;
  }
  public getHpPerson(): number {
    return this.hpPerson;
  }
  public setHpPerson(newVal: number): void {
    this.hpPerson += newVal;
    this.hpPerson > this.fullHpPerson
      ? (this.hpPerson = this.fullHpPerson)
      : this.hpPerson;
  }
  public getFullHpPerson(): number {
    return this.fullHpPerson;
  }
  public getTypePerson(): string {
    return this.typePerson;
  }
}

class HeroPerson extends Person {
  protected manaPerson: number;
  constructor(
    namePerson: string,
    atPerson: number,
    defPerson: number,
    moveOutPerson: number,
    critPerson: number,
    iconPerson: string,
    hpPerson: number,
    fullHpPerson: number,
    typePerson: string,
    manaPerson: number
  ) {
    super(
      namePerson,
      atPerson,
      defPerson,
      moveOutPerson,
      critPerson,
      iconPerson,
      hpPerson,
      fullHpPerson,
      typePerson
    );
    this.manaPerson = manaPerson;
  }
  public getManaPerson(): number {
    return this.manaPerson;
  }
}

export default HeroPerson;
