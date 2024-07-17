import React, {Component} from 'react';
import Home from "./components/Home";

/*TODO: Import React, { Component } from ‘react’;
    Import file Home.js vào App.js
    Tạo class App bằng class App extends Component
    Gọi hàm constructor(props)
        Gọi hàm super(props)
        Cập nhật object this.state lần lượt theo các key-value:
            isLoggedIn: false
    Khởi tạo hàm handleLogin, hàm này sẽ cập nhật lại giá trị mới cho isLoggedIn bằng true
    Khởi tạo hàm handleLogout, hàm này sẽ cập nhật lại giá trị mới cho isLoggedIn bằng false
    Gọi hàm render, trả về là element JSX thể hiện các element
        Khai báo các biến isLoggedIn và form từ state
        Dùng hàm if để kiểm tra isLoggedIn có bằng true không
            Nếu đúng gọi hàm return trả về component Home, component này được props function onLogout={this.handleLogOut}
            Nếu đúng gọi hàm return trả về các element của form Login

*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLogIn = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogOut = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        const {isLoggedIn} = this.state
        if (isLoggedIn) return (<Home onLogOut={this.handleLogOut}/>)
        return (<div style={{textAlign: 'center'}}>
            <div>
                <h1>Please Log in</h1>
                <button onClick={this.handleLogIn}>Log in</button>
            </div>
        </div>)
    }
}

export default App