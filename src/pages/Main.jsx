import { Component } from 'react';
import Layout from '../components/Layout';

export default class Main extends Component {
    componentWillUnmount = () => {
        // alert('Bạn đã đăng xuất!!');
    }

    render() {
        return(
            <div>
                <div className="homepage">
                    <Layout />
                    <button 
                        className="btn" 
                        type="button" 
                        onClick={
                            this.props.onLogOut
                        }
                    >Log out
                    </button>
                </div>
            </div>
        );
    }
}