import React from "react";


class AddUserForm extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props);
        const { user } = props; // Destructure user from props
        console.log(user);
        this.state = {
          firstname: user ? user.firstname : "", // Set initial values based on user prop
          lastname: user ? user.lastname : "",
          bio: user ? user.bio : "",
          age: user ? user.age : 1,
          isHappy: user ? user.isHappy : false,
        };
    }
    render() {
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Name" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} />
                <input placeholder="Last Name" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} />
                <input type="textarea" placeholder="Bio" value={this.state.bio} onChange={(e) => this.setState({bio: e.target.value})} />
                <input placeholder="Age" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} />
                <label htmlFor="isHappy">Счаслив?</label>
                <input type="checkbox" value={this.state.age} id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myForm.reset(); // clear form используем ref в теге form для очистки формы
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
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