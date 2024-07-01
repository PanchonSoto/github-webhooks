import { Envs } from "../../config";



export class DiscordService {

    private readonly discordHookUrl = Envs.DISCORD_WEBHOOK_URL;

    constructor(){}


    async notify(message: string) {

        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://media1.tenor.com/m/A15H8E1VUh8AAAAC/github-cat.gif' }
                }
            ]
        }

        const res = await fetch(this.discordHookUrl, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body),

        });

        if(!res.ok) {
            console.log('Error sending message to discord');
            return false;
        }

        return true;

    }

}
