/*
    Defines the API route we are using.
*/
const w1 = 'https://app.swaggerhub.com/apis/TIT1/AnimalAPIV2/1.0.0';

const w2 = 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/branch';

const w3 = 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animal';

const users = [
    {
        id : 1,
        name : 'userUser',
        email: 'user@titoanimals.com',
        password: 'secret',
        description: '',
        role: 'user'
    },
    {
        id : 2,
        name : 'userEmployee',
        email: 'employee@titoanimals.com',
        password: 'secret',
        description: '',
        role: 'employee'
    },
    {
        id : 3,
        name : 'userAdmin',
        email: 'admin@titoanimals.com',
        password: 'secret',
        description: '',
        role: 'admin'
    },
    {
        id : 4,
        name : 'userManager',
        email: 'manager@titoanimals.com',
        password: 'secret',
        description: '',
        role: 'manager'
    }
];

export const ANIMALS_CONFIG = {
    ANIMAL_API: w3,
    BRANCH_API: w2,
    GLOBAL_USERS: users
};