import React from 'react';
import expect from 'expect';
import {render} from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TestForm from "./TestRender";
import BreweryForm from "./BreweryForm";
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Breweries Tests", () => {
  it("should pass", () => {
    expect(true).toEqual(true);
  });

  it("Brewery Form test", ()=>{
      const props  = {
        brewery:{name:"TestName",city:"TestCity",phone:"TestPhone"},
        onSave:()=>{console.log("Save")},
        onChange:()=>{console.log("Save")},
        saving:false,
        errors:{name:"",city:"",phone:""}
      };
      const div = document.createElement('div');
      render(<BreweryForm {...props}/>,div);
  });

  it("Enzyme test",()=>{
    //const component = shallow(<TestForm/>);
    expect(true).toEqual(true);
  })

  // it("Brewery Form test", () => {

  //   const breweryForm = shallow(<BreweryForm />);
  // });
});
