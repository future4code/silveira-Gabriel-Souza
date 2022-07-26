
    enum POST_TYPES {
        NORMAL = "normal",
        EVENT = "event"
     }
     
     export type CreatePostInputDto = {
        photo: string,
        description: string,
        type: POST_TYPES,
        createdAt: Date,
     
     }  

