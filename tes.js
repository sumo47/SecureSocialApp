let arr = ["sumit", "kumar"]
console.log(arr.indexOf("sumi"))

let obj = {
    _id: new ObjectId('65f42625d312a3d464dfa8e6'),
    authorId: new ObjectId('65f33ed05778c8c9c0488bfe'),
    post: 'this is post by aabhash',
    likes: [
      new ObjectId('65f33ed05778c8c9c0488bfe'),
      new ObjectId('65f33ed05778c8c9c0488bfe'),
      new ObjectId('65f33ed05778c8c9c0488bfe'),
      new ObjectId('65f33ed05778c8c9c0488bfe'),
      new ObjectId('65f33ed05778c8c9c0488bfe'),
      new ObjectId('65f33ed05778c8c9c0488bfe')
    ],
    isDeleted: false,
    DeletedAt: null
  }

  console.log(obj.likes.indexOf("65f33ed05778c8c9c0488bfe"))