import React from 'react';
import Label from './Label';
import Input from './Input';
import Row from './Row';

const Form = (props) => (
	<>
    <Row>
      <Label htmlFor="adb">Average daily PHP balance</Label>
      <Input
        id="adb"
        type="number"
        min="0"
        name="adb"
        placeholder="Average daily PHP balance..."
        onChange={this.handleChange}
        value={this.state.adb}
      />
    </Row>
    <Row>
      <Label htmlFor="interest">
        Interest (in percent)
      </Label>
      <Input
        id="interest"
        type="number"
        placeholder="Interest in percent..."
        min="0"
        max="100"
        name="interest"
        onChange={this.handleChange}
        value={this.state.interest}
      />
    </Row>
    <Row>
      <Label htmlFor="days">
        Number of days in a month
      </Label>
      <Input
        id="days"
        type="number"
        placeholder="Number of days in month..."
        min="1"
        max="31"
        name="days"
        onChange={this.handleChange}
        value={this.state.days}
      />
    </Row>
    <Row>
      <Label htmlFor="tax">
        Withholding tax
      </Label>
      <Input
        id="tax"
        type="number"
        placeholder="Withholding tax..."
        min="0"
        max="100"
        name="tax"
        onChange={this.handleChange}
        value={this.state.tax}
      />
    </Row>
    </>
);

export default Form