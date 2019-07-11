class Post {
    constructor(title, content, author) {
        this.title = title
        this.content = content
        this.author = author
        return this.JSONobject()
    }

    JSONobject() {
        return { title: this.title, content: this.content, author: this.author }
    }
}

export default Post