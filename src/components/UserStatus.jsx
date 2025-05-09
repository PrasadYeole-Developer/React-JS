let UserStatus = ({loggedIn, isAdmin}) => {
  if (loggedIn && isAdmin) {
    return <p>Welcome Admin!</p>;
  }
  else if(loggedIn){
    return <p>Welcome User</p>
  }
  else{
    return <p>Get OUT!</p>
  }
};

export default UserStatus;