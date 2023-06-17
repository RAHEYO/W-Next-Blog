import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import process from 'process';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    try {
        await sql`CREATE TABLE Chats ( Part1 varchar(255), Part2 varchar(255) );`;
        await sql`INSERT INTO Chats (Part1, Part2) VALUES ( 'Karina', 'Rah' );`;
    } catch (err) {
        return response.status(500).json({ err });
    }

    const chats = await sql`SELECT * FROM Chats;`;
    
    return response.status(200).json({ chats });
}