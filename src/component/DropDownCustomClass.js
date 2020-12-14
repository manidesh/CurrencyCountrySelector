import React , {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Label, Button, Form } from 'reactstrap';
import callingCodes from './callCodes';

class DropDownCustomClass extends Component{
    constructor(props){
        super(props);
        this.state={
            callingCodesArr : [],
            isDropDownOpen : false,
            dropDownText : "Select Country"
        }
        this.toggleDropDown=this.toggleDropDown.bind(this);
        this.selectedValue = this.selectedValue.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this)
    }

    componentDidMount(){
        this.setState({callingCodesArr : callingCodes});
        this.setState({selectedObj : callingCodes[0]})
    }
    toggleDropDown(){
        this.setState({
            isDropDownOpen : !this.state.isDropDownOpen
        })
    }
    selectedValue(sItem){
        this.setState({dropDownText : sItem.currentTarget.textContent})
        this.state.callingCodesArr.map((item)=>{
           // console.log(item.name);
            if((item.name)===sItem.currentTarget.textContent){
                this.selectedCurrencySymbol = item.currency.symbol;
            }
            
        })
    }
     renderItems(item){
        return(<DropdownItem onClick={this.selectedValue}>
            <span><img src={"data:image/png;base64,"+item.flag} className="img-responsive"/></span>
            <span>{item.name}</span>
        </DropdownItem>)
     }
      onSubmitForm(event) {
        alert(this.amount.value + " " + this.selectedCurrencySymbol);
        event.preventDefault();
      }
      
    render(){
        return(
            <div>
                <br/><br/><br/>
                <div className="row"><div className="col-md-2"></div>
                <br/><br/><br/><span><h1>Country Selector : </h1></span></div>
                <div className="row"><div className="col-md-2"></div>
                <div className="col-md-2">
                <Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                        {this.state.dropDownText}
                    </DropdownToggle>
                    <DropdownMenu modifiers={{
                setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: (data) => {
                    return {
                        ...data,
                        styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: '200px',
                        },
                    };
                    },
                },
                }}>
                {this.state.callingCodesArr.map((item)=>{
                    return (this.renderItems(item))
                })}
                </DropdownMenu>
                </Dropdown></div>
            <div className="col-md-5">
            <Form onSubmit={this.onSubmitForm}>
            <Input type="text" name="amount" placeholder = "Enter Amount" innerRef={value=>(this.amount = value)}/><br/>
            <Button className="btn btn-success" type="submit" value="submit">Show Currency</Button>
            </Form>
            </div>
            </div>
    </div>
        );
    }
}
export default DropDownCustomClass;