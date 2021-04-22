const { default: profileReducer, addPostActionCreator } = require("./profile-reducer");

it(
    "length of posts should be incremented",
    () => {
        // 1. test data
        let initialState = {
            posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            ],
        }
        const action = addPostActionCreator("it-kamasutra.com")
        // 2. action
        const newState = profileReducer(initialState, action) 
        // 3. expectations
        expect(newState.posts.length).toBe(3);
    }
)

it(
    "after deleting length of posts should be decremented",
    () => {
        // 1. test data
        let initialState = {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
        }
        const action = deletePost(1)
        // 2. action
        const newState = profileReducer(initialState, action) 
        // 3. expectations
        expect(newState.posts.length).toBe(3)
    }
)