/**
 * Para criar: name, email, password
 */

interface TechObject {
    title: string,
    experience: number
}

interface CreateUserData {
    name?: string,
    email: string,
    password: string,
    // techs: array[] caso for um tipo unico dentro do array
    techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;
}