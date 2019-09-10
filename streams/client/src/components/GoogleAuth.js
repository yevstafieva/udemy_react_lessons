import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '852791907438-1evjn62j121aelhvmgl3e96q1bi773gv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }
        
    

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.auth.signOut}>
                    <i className="google icon" />
                    Sign out
                </button>
            );
        } else {
            return (
                <button className="ui primary google button" onClick={this.auth.signIn}>
                    <i className="google icon" />
                    Sign in
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;