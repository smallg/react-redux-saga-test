import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Icon } from 'antd';

const TodoListUI = (props) => {
    return (
            <div>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <Input value={props.inputValue}
                           placeholder='todo info'
                           style={{width: '300px', marginRight: '10px'}}
                           onChange={props.handleInputChange}/>
                    <Button type="primary" onClick={props.handleButtonClick} disabled={!props.inputValue}>Submit</Button>
                </div>
                <List bordered
                      style={{marginTop: '10px', marginLeft: '10px', width: '300px'}}
                      dataSource={props.list}
                      renderItem={(item, index) => (<List.Item>
                          <span>{item}</span>
                          <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" onClick={() => {
                              props.handleItemDelete(index);
                          }}/>
                      </List.Item>)}/>
            </div>
    );
};

// class TodoListUI extends Component {
//     render() {
//         return (
//                 <div>
//                     <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                         <Input value={this.props.inputValue}
//                                placeholder='todo info'
//                                style={{width: '300px', marginRight: '10px'}}
//                                onChange={this.props.handleInputChange}/>
//                         <Button type="primary" onClick={this.props.handleButtonClick} disabled={!this.props.inputValue}>Submit</Button>
//                     </div>
//                     <List bordered
//                           style={{marginTop: '10px', marginLeft: '10px', width: '300px'}}
//                           dataSource={this.props.list}
//                           renderItem={(item, index) => (<List.Item>
//                               <span>{item}</span>
//                               <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" onClick={(index) => {
//                                   this.props.handleItemDelete(index);
//                               }}/>
//                           </List.Item>)}/>
//                 </div>
//         );
//     }
// }

export default TodoListUI;