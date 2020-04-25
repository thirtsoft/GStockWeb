import { Fournisseur } from './fournisseur.model';

export class Commande_Fournisseur {

    public idCmdFournisseur: number;
	public dateCmdFournisseur: Date;
	public etatCmdFournisseur: string;
    public fournisseur: Fournisseur;

}