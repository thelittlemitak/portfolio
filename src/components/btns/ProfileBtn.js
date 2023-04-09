function ProfileBtn(props) {
  return (
    <a className="main-header-buttons profile-btn" href="profile">
      <strong>{props.userNameTunnel}</strong>
    </a>
  );
}

export default ProfileBtn;
