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
            Repo Card
        </div>
     );
}

export default RepoCard;