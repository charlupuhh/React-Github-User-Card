import React from 'react';

class UserCard extends React.Component  {

  render() {
    return (
      <div className="card user-card">
        <img src={this.props.user.avatar_url} alt='Avatar'/>
        <div className="card-info">
          <p className="username">{this.props.user.login}</p>
          <a href={this.props.user.html_url}>View Github Profile</a>
        </div>
      </div>
    )
  }
}
export default UserCard;