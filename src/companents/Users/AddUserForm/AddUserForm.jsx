import React from "react";


class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false,
        }

    }
    render() {
        return(
            <form>
                <input placeholder="Name" onChange={(e) => this.setState({firstname: e.target.value})} />
                <input placeholder="Last Name" onChange={(e) => this.setState({lastname: e.target.value})} />
                <input placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})} />
                <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})} />
                <label htmlFor="isHappy">Счаслив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})} />
                <button type="button" onClick={() => this.props.addUser({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                })}>Save</button>
            </form>
        )
    }

}

export default AddUserForm;