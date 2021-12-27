import RepoData from "../Models/repo";

function RepoCard(props: any) {
    const repoData = props.repoData;

    const repo: RepoData = {
        id: repoData.id,
        name: repoData.name,
        owner: repoData.owner.login,
        url: repoData.url,
        language: repoData.url
    }
    
    return ( 
        <div className="RepoCard">
            <div className="container">
                <div className="secondDiv"> 
                    <h2>Name: {repo.name}</h2>
                    <h3>Owner: {repo.owner}</h3>
                    <a href={repo.url} target="_blank">{repo.url}</a>
                </div>
            </div>
            <div className="clearFix"></div>
        </div>
     );
}

export default RepoCard;