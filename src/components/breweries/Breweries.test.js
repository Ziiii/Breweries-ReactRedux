import React from 'react';
import {expect} from 'chai';
import BreweryForm from "./BreweryForm";
import Enzyme,{shallow,render,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe("Breweries Tests", () => {
  let props;
  beforeEach(() => {
    props  = {
      brewery:{name:"MyName",city:"MyCity",phone:"MyPhone"},
      onSave:sinon.spy(),
      onChange:()=>{},
      saving:false,
      errors:{name:"",city:"",phone:""}
    };
  });

  it("should pass", () => {
    expect(true).to.equal(true);
  });

  it("Brewery Form static text", ()=>{
    const component = render (<BreweryForm {...props}/>);
    expect(component.text()).to.equal("Manage BreweryNameCityPhone");
  });

  it("Enzyme test",()=>{
    const component = mount(<BreweryForm {...props}/>);
    component.find("input").last().simulate("click");
    expect(props.onSave.calledOnce).to.be.true;
  })

});
