import React, { Component } from 'react'

export default class FormVadiation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            manv: "",
            tennv: "",
            email: "",

            // lưu giá triij người dùng nhập vào
            value: {
                manv: "",
                tennv: "",
                email: "",
            },
            // lưu thông báo lỗi
            error: {
                manv: "",
                tennv: "",
                email: "",
            },
            msnvValid: false,
            tennvValid:false,
            emailValid: false,
            // form chưa hợp lệ

            formValid: false, 
        }
        this.close = React.createRef();
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            value: { ...this.state.value ,[name]: value,}
            
        }, ()=> {console.log(this.state)});
    }
    handleError = (event) => {
        const { name, value } = event.target;
        let mess = value.trim() === "" ? name + " không được rỗng" : "";
        let {manvValid, tennvValid, emailValid} = this.state;
        switch (name) {
            case "manv":
                manvValid = mess === "" ? true : false;
                if(value && value.length <= 4) {
                    mess =  "Đọ dài kí tự phải từ 5 chở lên";
                    manvValid = false;
                }
                break;
            case "tennv":
                tennvValid = mess === "" ? true : false;
                break;
            case "email":
                emailValid = mess === "" ? true : false;
                if(value && !value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))  {
                    mess = "Email không hợp lệ";
                    emailValid = false;
                }
                break;
            default: break;
        }
        this.setState({
            error: {...this.state.error, [name]: mess},
            manvValid,
            tennvValid,
            emailValid,
        }, 
        () => {
            console.log(this.state);
            this.handleFormValid()
        })
    }  

    handleFormValid = () => {
        const {manvValid, tennvValid, emailValid} = this.state;
        this.setState({
            formValid: manvValid && tennvValid && emailValid,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.getUserSubmit(this.state);
        console.log(this.state)
    
        //close modal
        // this.close.current.click();
      };
    
    render() {
        const {error} = this.state;
        return (
            <div className="container">
            <h3 className="title">*FormValidation</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Mã Nhân Viên</label>
                <input type="text" className="form-control" name="manv" onChange={this.handleOnChange}  onBlur={this.handleError}/>
                {error.manv ? (<div className="alert alert-danger">{error.manv}</div>) : ("")}
              </div> 

              <div className="form-group">
                <label>Tên Nhân Viên</label>
                <input type="text" className="form-control" name="tennv" onChange={this.handleOnChange} onBlur={this.handleError}/>
                {error.tennv ? (<div className="alert alert-danger">{error.tennv}</div>) : ("")}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={this.handleOnChange} onBlur={this.handleError}/>
                {error.email ? (<div className="alert alert-danger ">{error.email}</div>) : ("")}
              </div>
              <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                Submit
              </button>
            </form>
          </div>
        )
    }
}
