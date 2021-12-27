import IssueCard from "./IssueCard";
import RepoCard from "./RepoCard";
import UserCard from "./UserCard";

function Cards(props: any) {
    const data = props.data;
    console.log(data);

    return (
        <div className="Cards">
            {data && data.type == 'users' && data.data.items.map((user: any) => (
                <UserCard key={user.id} userData = {user}/>
            ))}
            {data && data.type == 'repositories' && data.data.items.map((repo: any) => (
                <RepoCard key={repo.id} repoData = {repo}/>
            ))}
            {data && data.type == 'issues' && data.data.items.map((issue: any) => (
                <IssueCard key={issue.id} issueData = {issue}/>
            ))}
        </div>
    );
}

export default Cards;