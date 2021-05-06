import { Component, OnInit } from "@angular/core";

@Component({
  selector: "length-converter",
  templateUrl: "./lengthConverter.component.html",
  styleUrls: ["./lengthConverter.component.scss"],
})
export class LengthConverter implements OnInit {
  lengthOptions = [
    {
      id: 0,
      label: "Kilometre",
      unit: "km",
    },
    {
      id: 1,
      label: "Metre",
      unit: "m",
    },
    {
      id: 2,
      label: "Centimetre",
      unit: "cm",
    },
  ];
  op1;
  op2;
  in1;
  in2;
  la1;
  la2;

  ngOnInit() {
    this.op1 = 0;
    this.op2 = 1;
    this.la1 = "km";
    this.la2 = "m";
    this.in1 = null;
    this.in2 = null;
  }
  constructor() {
    // this.ch1();
    // this.ch2();
  }

  va1() {
    if (this.la1 == "km" && this.la2 == "m") this.in2 = this.in1 * 1000;
    else if (this.la1 == "km" && this.la2 == "cm") this.in2 = this.in1 * 100000;
    else if (this.la1 == "m" && this.la2 == "km") this.in2 = this.in1 / 1000;
    else if (this.la1 == "m" && this.la2 == "cm") this.in2 = this.in1 * 100;
    else if (this.la1 == "cm" && this.la2 == "km") this.in2 = this.in1 / 100000;
    else if (this.la1 == "cm" && this.la2 == "m") this.in2 = this.in1 / 100;
    else this.in2 = this.in1;
  }
  ch1() {
    let val = this.lengthOptions.filter((ele) => ele.id == this.op1)[0];
    if (val) this.la1 = val.unit;
    if (this.in1 != null) this.va2();
  }

  va2() {
    if (this.la1 == "km" && this.la2 == "m") this.in1 = this.in2 / 1000;
    else if (this.la1 == "km" && this.la2 == "cm") this.in1 = this.in2 / 100000;
    else if (this.la1 == "m" && this.la2 == "km") this.in1 = this.in2 * 1000;
    else if (this.la1 == "m" && this.la2 == "cm") this.in1 = this.in2 / 100;
    else if (this.la1 == "cm" && this.la2 == "km") this.in1 = this.in2 * 100000;
    else if (this.la1 == "cm" && this.la2 == "m") this.in1 = this.in2 * 100;
    else this.in1 = this.in2;
  }
  ch2() {
    let val = this.lengthOptions.filter((ele) => ele.id == this.op2)[0];
    if (val) this.la2 = val.unit;
    if (this.in2 != null) this.va1();
  }
}
