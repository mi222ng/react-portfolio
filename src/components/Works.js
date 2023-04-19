import React, { Component } from 'react'
import axios from 'axios';
import WorksList from './WorksList';

class Works extends Component {

  constructor(props){
    super(props);
    this.state = {
      worksList : [] //초기 리스트는 비어있습니다.
    };
  }
  componentDidMount(){
    this._getList(); 
  }
  _getList(){
    //worksList를 가지고 옵니다.
  const apiUrl = 'data/worksdata.json';
  axios.get(apiUrl)
    .then(data => {
      //가지고 온 리스트를 state에 저장합니다.
      this.setState({
        worksList : data
      });
    })
    .catch(error => {
      console.log(error);
    });
}
  render() {
    let publicURL = process.env.PUBLIC_URL;
    return (
      <section className='section' id='works'>
        <h2 className='title'>It’s my works<span role="img" aria-label="Flexed Biceps">💪</span></h2>
        <div className='d-flex flex-wrap'>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project1'/>
          </div>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project2'/>
          </div>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project3'/>
          </div>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project4'/>
          </div>
          <WorksList data={this.worksList}/>
        </div>
      </section>
    )
  }
}

export default Works;