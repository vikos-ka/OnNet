 
 let initialState = {
 
        friends: [
            {
                id: 1,
                name: "Max",
                ava: "https://klike.net/uploads/posts/2019-06/1561878174_4.jpg"
            },
            {
                id: 2,
                name: "Oliver",
                ava: "https://klike.net/uploads/posts/2019-06/1561878099_15.jpg"
            },
            {
                id: 3,
                name: "Andrew",
                ava: "https://klike.net/uploads/posts/2019-06/1561878174_4.jpg"
            },
            {
                id: 4,
                name: "Mike",
                ava: "https://klike.net/uploads/posts/2019-06/1561878096_2.jpg"
            },
            {
                id: 5,
                name: "Tom",
                ava: "https://www.meme-arsenal.com/memes/b1960e7d08b8a78c37bfce0dfb980651.jpg"
            },
            {
                id: 6,
                name: "Miles",
                ava: "https://klike.net/uploads/posts/2019-06/1561878099_15.jpg"
            }  
        ]
}

 
 
 const friendsReducer = (state = initialState, action) => {
    return state;
}
export default friendsReducer