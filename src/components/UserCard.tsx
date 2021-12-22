import UserData from "../Models/user";

function UserCard(props: any) {
    const user: UserData = {
        id : props.userData.id,
        imgUrl: props.userData.avatar_url,
        url: props.userData.url,
        userName: props.userData.login,
    };

    console.log(user);

    return ( 
        <div className="UserCard">
            <ul>
                <li>{user.imgUrl }</li>
                <li>{user.url }</li>
                <li>{user.userName }</li>
            </ul>
        </div>
     );
}

export default UserCard;