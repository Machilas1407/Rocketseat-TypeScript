import { Request, Response } from 'express'
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'marcello.machilas@email.com',
        password: '123456',
        techs: [
            'Node.js',
            'React',
            'ReactJS',
        ]
    });

    console.log(user.email)

    return response.json({ message: 'Hello World' });
}