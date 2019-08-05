import React, { Component } from 'react'

import './AdminModalContent.css';
import defaultImage from '../../../../amar/orangeLogo.png';

class AdminModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetBatch: false,
      addOffer: false,
      removeCourse: false,
      batch: '', offer: '',
      email: '', password: '',
      raEmail: '', raPassword: ''
    }
  }
  inputChanged =e=> {
    this.setState({[e.target.name]: e.target.value});
  }
  componentWillReceiveProps(getProps) {
    if(getProps.index===4) {
      this.setState({
        resetBatch: false, addOffer: false,
        removeCourse: false
      })
    }
  }

  render() {
    const { 
      resetBatch, addOffer, removeCourse,
      batch, offer, email, password,
      raEmail, raPassword
    } = this.state;
    switch(this.props.index) {
      case 2:
        return <div className="addCourseInfoList">
          <h1>TO ADD COURSE</h1>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <p>Every <b>field</b> should be <b>filled</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>CourseName</b> should have length <b> >= 7</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>Description</b> should have <b>atleast 10 words</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>CourseFee</b> should be <b>Number</b> with <b>3 to 6 digits</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>Offer</b> should be <b>Number</b> with <b>1 to 2 digits</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>Level</b> should contain <b>Beginner</b> or <b>Intermediate</b> or <b>Advanced</b> word init.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>Programme</b> should contain <b>Intership</b> or <b>Workshop</b> word init.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>CompletesIn</b> should be <b>Number</b> with <b>1 to 2 digits</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>Location</b> should have <b>atleast 2 words</b>.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>StartsFrom</b> should match <b>dd-mm-yyyy hrs:min AM|PM</b> pattern.</p>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <p><b>CourseContentBox</b>, <b>YouLearnBox</b>, <b>PreRequirementBox</b> should have <b>atleast 4 lines</b>.</p>
            </li>
          </ul>
        </div>
      case 4:
        return <div className="resCourseInfoPopup">
          <h2>React and Redux full course</h2>
          <div className="popTextFlex">
            <h5>Vf1qI476obyW7iSIdz60</h5>
          </div>
          <div className="popTextFlex">
            <h5>Active Batch 12-01-1996 11:30 PM</h5>
          </div>
          <div className="adminMoveBox">
            {resetBatch?
              <div>
                <input type="text" autoComplete="off"
                  placeholder="dd-mm-yyyy hr:mn AM|PM"
                  name="batch" value={batch} style={{color: 'green',
                  backgroundColor: 'rgba(0, 128, 0, 0.3)'}}
                  onChange={this.inputChanged} />
                <input type="text" autoComplete="off" placeholder="EMAIL"
                  name="email" value={email} style={{color: 'green',
                  backgroundColor: 'rgba(0, 128, 0, 0.3)'}}
                  onChange={this.inputChanged} />
                <input type="text" autoComplete="off" placeholder="PASSWORD"
                  name="password" value={password} style={{color: 'green',
                  backgroundColor: 'rgba(0, 128, 0, 0.3)'}}
                  onChange={this.inputChanged} />
                <div className="admbBtns">
                  <button type="button" style={{color: 'red'}}
                    onClick={()=>this.setState({resetBatch: false})}
                    ref={r=>{this.resetCancelBtn=r}}>CANCEL</button>
                  <button type="button" style={{color: 'green'}}
                    onClick={()=>{console.log(batch, email, password)
                    }}>RESET</button>
                </div>
              </div>:
              <button type="button" style={{color: 'green'}}
                onClick={()=>{
                  this.setState({
                    resetBatch: true, addOffer: false,
                    removeCourse: false, batch: '', offer: '',
                    email: '', password: ''
                  })
                }}>
                <h4>RESET BATCH</h4>
                <i className="fas fa-users"></i>
              </button>
            }
          </div>
          <div className="adminMoveBox">
            {addOffer?
              <div>
                <input type="text" autoComplete="off" placeholder="OFFER"
                  name="offer" value={offer} style={{color: 'goldenrod',
                  backgroundColor: 'rgba(218, 165, 32, 0.3)'}}
                  onChange={this.inputChanged} />
                <input type="text" autoComplete="off" placeholder="EMAIL"
                  name="email" value={email} style={{color: 'goldenrod',
                  backgroundColor: 'rgba(218, 165, 32, 0.3)'}}
                  onChange={this.inputChanged} />
                <input type="text" autoComplete="off" placeholder="PASSWORD"
                  name="password" value={password} style={{color: 'goldenrod',
                  backgroundColor: 'rgba(218, 165, 32, 0.3)'}}
                  onChange={this.inputChanged} />
                <div className="admbBtns">
                  <button type="button" style={{color: 'red'}}
                    onClick={()=>this.setState({addOffer: false})}
                    ref={r=>{this.offerCancelBtn=r}}>CANCEL</button>
                  <button type="button" style={{color: 'green'}}
                    onClick={()=>{console.log(offer, email, password)
                    }}>ADD</button>
                </div>
              </div>:
              <button type="button" style={{color: 'goldenrod'}}
                onClick={()=>{
                  this.setState({
                    addOffer: true, resetBatch: false,
                    removeCourse: false, batch: '', offer: '',
                    email: '', password: ''
                  })
                }}>
                <h4>ADD OFFER</h4>
                <i className="fas fa-users"></i>
              </button>
            }
          </div>
          <div className="adminMoveBox">
            {removeCourse?
              <div>
                <input type="text" autoComplete="off" placeholder="EMAIL"
                  name="email" value={email} style={{color: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.3)'}}
                  onChange={this.inputChanged} />
                <input type="text" autoComplete="off" placeholder="PASSWORD"
                  name="password" value={password} style={{color: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.3)'}}
                  onChange={this.inputChanged} />
                <div className="admbBtns">
                  <button type="button" style={{color: 'red'}}
                    onClick={()=>this.setState({removeCourse: false})}
                    ref={r=>{this.removeCancelBtn=r}}>CANCEL</button>
                  <button type="button" style={{color: 'green'}}
                    onClick={()=>{console.log(email, password)
                    }}>CONFIRM</button>
                </div>
              </div>:
              <button type="button" style={{color: 'red'}}
                onClick={()=>{
                  this.setState({
                    removeCourse: true, resetBatch: false,
                    addOffer: false, batch: '', offer: '',
                    email: '', password: ''
                  })
                }}>
                <h4>REMOVE COURSE</h4>
                <i className="fas fa-users"></i>
              </button>
            }
          </div>
        </div>
      case 5:
        return <div className="replyToStudent">
          <h1>REPLYING</h1>
          <h3>To, StudentName</h3>
          <textarea rows="10" placeholder="Your Mssg..." />
          <button type="button">SEND</button>
        </div>
      case 7:
        return <div className="confirmAdminRemove">
          <h4>Really, then confirm !!!</h4>
          <div className="maConfirmForm">
            <div className="formField">
              <h5>EMAIL</h5>
              <input type="email" placeholder="EMAIL"
                value={raEmail} onChange={this.inputChanged}
                name="raEmail" autoComplete="off" />
            </div>
            <div className="formField">
              <h5>PASSWORD</h5>
              <input type="password" placeholder="PASSWORD"
                value={raPassword} onChange={this.inputChanged}
                name="raPassword" autoComplete="off" />
            </div>
            <div className="formField">
              <button type="button">CONFIRM</button>
            </div>
          </div>
        </div>
      default:
        return <div className="defaultDiv">
          <img src={defaultImage} alt="" />
        </div>
    }
  }
}

export default AdminModalContent