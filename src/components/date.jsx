import React, { Component } from "react";

class Difference extends Component {
  constructor(props){
    super(props);
    this.state={InputValue : ""};
  }

  handleGetInputValue = (event) => {
    this.setState({
      InputValue: event.target.value,
    });
  };

  isDate = (input) => {
    if (input.length !== 22)
      // To verify whether user is standard imput or not
      return false;

    const space = [input[2], input[5], input[11], input[14], input[17]]; // To get the blanks in the
    const temp = space.map((m) => m == " "); // to verify whether all the spaces are in the correct position, and return boolean value
    const result = temp.filter((m) => m.toString().length > 4); // to verify whether there is a false in the array
    if (result.length !== 0) {
      return false;
      
    }
    const firstDate = input.substring(0, 10);
    const secondDate = input.substring(12);
    //set the standard form of date
    let reg = /^(((0?[1-9]|[12]\d|3[01])\s(0?[13578]|1[02])\s(19\d{2}|200\d|2010))|((0?[1-9]|[12]\d|30)\s(0?[13456789]|1[012])\s(19\d{2}|200\d|2010))|((0?[1-9]|1\d|2[0-8])\s0?2\s(19\d{2}|200\d|2010))|(0?[1-9]|1\d|2[0-9])\s0?2\s(((19)([13579][26]|[2468][048]|0[48]))|(200[048])))$/;
    if (!reg.test(firstDate)) {//to vefiry the first date
      return false;
    } else if (!reg.test(secondDate)) {//to vefiry the second date
      return false;
    } else return true;
  };

  // to calculate the difference of two date
  dateDiffer = (input) => {
    if (this.isDate(input)) {
      let tempDate, newDate1, newDate2, Days, Date1, Date2;
      Date1 = input.substring(0, 10);
      Date2 = input.substring(12);
      tempDate = Date1.split(" ");
      newDate1 = new Date(tempDate[1] + "-" + tempDate[0] + "-" + tempDate[2]);
      tempDate = Date2.split(" ");
      newDate2 = new Date(tempDate[1] + "-" + tempDate[0] + "-" + tempDate[2]);
      Days = parseInt(Math.abs(newDate1 - newDate2) / 1000 / 60 / 60 / 24);
      const value= input+ ', '+Days;
      return value;
    } else return false;
  };

  render() {
    return (
      <div>
        <h1>Calculate Date Difference</h1>
        <input
          value={this.state.InputValue}
          onChange={this.handleGetInputValue}
        />
        <p>Please type in two dates like 'DD MM YYYY, DD MM YYYY' </p>
        {/* To show the result in the web page */}
        <p>{this.state.InputValue,this.dateDiffer(this.state.InputValue)}</p> 
      </div>
    );
  }
}

export default Difference;
