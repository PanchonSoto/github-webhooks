import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";



export class GitHubService {

    constructor(){}



    onStar(payload: GitHubStarPayload): string {

        let message: string = '';
        const {action, sender, repository, starred_at} = payload;


        message = `User ${sender.login} ${action} star on ${repository.full_name}`;



        return message;
    }

    onIssue(payload: GitHubIssuePayload) {

        const { action, issue } = payload;

        if(action==='opened') {
            return `An issue was opened with this title ${issue.title}`;     
        }

        if(action==='closed') {
            return `An issue was closed by ${issue.user.login}`;     
        }

        if(action==='reopened') {
            return `An issue was reopened by ${issue.user.login}`;     
        }

        return `Unhandled action for the issue event ${action}`;
    }

}
