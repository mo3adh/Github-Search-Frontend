import IssueData from "../Models/issue";

function IssueCard(props: any) {
    const issueData = props.issueData;

    const issue: IssueData = {
        id: issueData.id,
        state: issueData.state,
        title: issueData.title,
        url: issueData.html_url,
        user: issueData.user.login
    };

    return ( 
        <div className="IssueCard">
            <div className="card">
                <div className="cardDetails"> 
                    <h2>Title: {issue.title}</h2>
                    <h3>Owner: {issue.user}</h3>
                    <a href={issue.url} target="_blank">{issue.url}</a>
                </div>
            </div>
            <div className="clearFix"></div>
        </div>
     );
}

export default IssueCard;