import {client} from '../db.js';

export const user = client.db("QR-Attendence").collection("ADA");

export const session = client.db("College_Project").collection("ADA-session");