import { Client } from './client.model';
export class Commande_Client {
    public idCmdClient: number;
	public codeCmdClient: string;
	public dateCmdClient: Date;
	public etatCmdClient: string;
	public client: Client;
}