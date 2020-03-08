import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profileReducer';

const state = {
    posts: [{
        id: 1,
        message: "Hi! How are you?",
        like: 12,
        comment: 9999
    },
    {
        id: 2,
        message: "It's my first page",
        like: 40,
        comment: 1
    },
    {
        id: 3,
        message: "Some text",
        like: 12,
        comment: 9999
    }]
};

it('lengths of posts should increment', () => {
    const action = addPostActionCreator('it hello');
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
})

it('messsage of new post should be correct', () => {
    const action = addPostActionCreator('it hello');
    const newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe('it hello');
})

it('length of messages after deleting should decrement', () => {
    //1. data
    const action = deletePostActionCreator(1);
    //2. action
    const newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2);
})

it(`length of messages after deleting shouldn't decrement if Id is incorrect`, () => {
    //1. data
    const action = deletePostActionCreator(19);
    //2. action
    const newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
})