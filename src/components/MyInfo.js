import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormCard, Nav, Header, MyPageMenu } from 'components'
import 'styles/MyPage.scss'
import 'styles/Signup.scss'

export default class MyInfo extends Component {
  state = {
    tags: [
      { name: '흡연', selected: false, },
      { name: '애완동물', selected: false, },
      { name: '직장인', selected: false, },
      { name: '학생', selected: false, },
      { name: '코골이', selected: false, },
      { name: '아침형 인간', selected: false, },
      { name: '야행성', selected: false, },
      { name: '야식', selected: false, },
      { name: '조용한 사람', selected: false, },
      { name: '사교적인 사람', selected: false, },
      { name: '다이어트 중', selected: false, },
    ],
    form: {
      name: '',
      nickname: '',
      gender: 'male',
      year: '',
      month: '',
      day: '',
      phoneFirst: '',
      phoneMiddle: '',
      phoneLast: '',
      email: '',
      residence: '',
    },
  }

  toggleTag = (e) => {
    const clickedTag = e.target.getAttribute('name')
    const { tags } = this.state
    const newTags = [...tags]
    const tagIndex = newTags.findIndex(tag => tag.name === clickedTag);
    if (tagIndex >= 0) {
      newTags[tagIndex].selected = !newTags[tagIndex].selected

      this.setState({
        tags: newTags
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // const { signup } = this.props
    // const { name, nickname, gender, year, month, day, 
    //   phoneFirst, phoneMiddle, phoneLast, email, residence } = this.state.form
    // const birthday = `${year}-${month}-${day}`
    // const phone = `${phoneFirst}-${phoneMiddle}-${phoneLast}`

    // signup(email, name, nickname, birthday, phone, gender, residence, '', [])
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target

    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        [name]: value,
      },
    }))
  }

  checkMonth = () => {
    const { year, month } = this.state

    if (month <= 12) {
      if (month === 1 || month === 3 || month === 5 || month === 7 ||
        month === 8 || month === 10 || month === 12) {
        return '31'
      } else if (month === 2) {
        if (new Date(year, month - 1, 29).getMonth() !== 1) {
          return 28
        } else return 29
      } else {
        return 30
      }
    }
  }
  render() {
    const { tags } = this.state
    return (
      <div className="mypage-container">
        <Nav />
        <Header title="마이페이지" />
        <div className="header-text">MAIT FIT!</div>
        <div className="my-page">
          <MyPageMenu menu="info" />
          <div className="myinfo-contents">
            <form className="signup" onSubmit={this.handleSubmit}>
              <FormCard title="기본정보">
                <div className="basic-info">
                  <div className="form-group">
                    <label htmlFor="name">이름 : </label>
                    <input type="text" id="name" name="name" className="form-input" onChange={this.handleChangeInput} />
                    <label htmlFor="nickname">닉네임 : </label>
                    <input type="text" id="nickname" name="nickname" className="form-input" onChange={this.handleChangeInput} />
                    <label htmlFor="gender">성별 : </label>
                    <select id="gender" name="gender" onChange={this.handleChangeInput}>
                      <option defaultValue value="male">남성</option>
                      <option value="female">여성</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="birth">생년월일 : </label>
                    <input type="number" id="year" name="year" className="form-input"
                      min="1970" max={`${new Date().getFullYear()}`}
                      onChange={this.handleChangeInput}
                    />
                    /
                <input type="number" id="month" name="month" className="form-input"
                      min="1" max="12"
                      onChange={this.handleChangeInput}
                    />
                    /
                <input type="number" id="day" name="day" className="form-input"
                      min="1" max="31"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">연락처 : </label>
                    <input type="text" id="phoneFirst" name="phoneFirst" className="form-input"
                      onChange={this.handleChangeInput}
                    />
                    -
                <input type="text" id="phoneMiddle" name="phoneMiddle" className="form-input"
                      onChange={this.handleChangeInput}
                    />
                    -
                <input type="phone" id="phoneLast" name="phoneLast" className="form-input"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">이메일 : </label>
                    <input type="email" id="email" name="email" className="form-input"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="residence">거주 지역 : </label>
                    <input type="text" id="residence" name="residence" className="form-input"
                      onChange={this.handleChangeInput}
                    />
                  </div>
                </div>
              </FormCard>
              <FormCard
                title="선택사항 추가정보"
                description="* 추가정보를 많이 할 수록 잘 맞는 룸메이트와 더 쉽게 매칭됩니다."
              >
                <div className="tag-group">
                  {
                    tags.map((tag, index) => (
                      <div className={tag.selected ? "tag selected" : "tag"}
                        name={tag.name} key={index}
                        onClick={this.toggleTag}
                      >
                        #{tag.name}
                      </div>
                    ))
                  }
                </div>
              </FormCard>
              <Link to="/main">
                <button>수정 완료</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
