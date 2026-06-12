let posts = [];

function addPost(){

    let username = document.getElementById("username").value;
    let text = document.getElementById("postText").value;

    if(username === "" || text === ""){
        alert("Please fill all fields");
        return;
    }

    let post = {
        username: username,
        text: text,
        likes: 0
    };

    posts.push(post);

    displayPosts();
}

function likePost(index){
    posts[index].likes++;
    displayPosts();
}

function displayPosts(){

    let output = "";

    posts.forEach((post, index) => {
        output += `
        <div class="post">
            <h3>${post.username}</h3>
            <p>${post.text}</p>

            <button onclick="likePost(${index})">
                ❤️ Like (${post.likes})
            </button>
        </div>
        `;
    });

    document.getElementById("posts").innerHTML = output;
}