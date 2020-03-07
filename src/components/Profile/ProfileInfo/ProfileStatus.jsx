import React from 'react';
import style from './ProfileInfo.module.css';



class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEdit = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEdit = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        
        this.setState({
            status: e.currentTarget.value
        })
      
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
        this.setState({ status: this.props.status});
        }
    }
    
    render() {
        return (
            <> 
                {!this.state.editMode && 
                    <div className = {style.profile__status }>
                        <span onDoubleClick = {this.activateEdit}>{this.props.status 
                        || 'No status'}</span>
                    </div>
                }
                {this.state.editMode && 
                    <div className = {style.profile__statusEdit }> 
                        <input onChange = {this.onStatusChange} value = {this.state.status} autoFocus = {true } onBlur = {this.deactivateEdit} type="text"/>
                    </div>
                }
            </>
        );
    }
}
export default ProfileStatus;