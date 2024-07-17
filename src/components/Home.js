import React, {Component} from 'react';

/*TODO:
    Import React, { Component } from ‘react’;
    Tạo class Home bằng class Home extends Component
        Gọi hàm render, trả về là element JSX thể hiện các element gồm lời chào và nút Logout gọi function onLogOut từ props
    Trả class Home về làm giá trị mặc định của component
*/

class Home extends Component {
    render() {
        return (<div style={{textAlign: 'center'}}>
                <div>
                    <h1>Welcome</h1>
                    <button onClick={this.props.onLogOut}>Log out</button>
                </div>
            </div>)
    }
}

export default Home