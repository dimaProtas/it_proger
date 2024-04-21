import React from "react";


class AddUserForm extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props);
        const { user } = props; // Destructure user from props
        console.log(user);
        this.state = {
          first_name: user ? user.first_name : "", // Set initial values based on user prop
          last_name: user ? user.last_name : "",
          email: user ? user.email : "",
          age: user ? user.age : 1,
          isHappy: user ? user.isHappy : false,
        };
    }
    render() {
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Name" value={this.state.first_name} onChange={(e) => this.setState({first_name: e.target.value})} />
                <input placeholder="Last Name" value={this.state.last_name} onChange={(e) => this.setState({last_name: e.target.value})} />
                <input type="textarea" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                <input placeholder="Age" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} />
                <label htmlFor="isHappy">Счаслив?</label>
                <input type="checkbox" value={this.state.age} id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myForm.reset(); // clear form используем ref в теге form для очистки формы
                    this.userAdd = {
                        firs_tname: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }

                    if (this.props.user)
                        this.userAdd.id = this.props.user.id;

                    this.props.addUser(this.userAdd)
                }}>Save</button>
            </form>
        )
    }

}

export default AddUserForm;