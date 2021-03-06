import UserData from "../Models/user";

function UserCard(props: any) {
    const user: UserData = {
        id : props.userData.id,
        imgUrl: props.userData.avatar_url,
        url: props.userData.html_url,
        userName: props.userData.login,
    };

    return ( 
        <div className="UserCard">
                <div className="userImage">
                    <img src={user.imgUrl} alt="Image not found"/>
                </div>
                <div className="cardDetails"> 
                    <h3>{user.userName}</h3>
                    <a href={user.url} target="_blank">{user.url}</a>
                </div>
                <div className="clearFix"></div>
        </div>
     );
}

export default UserCard;