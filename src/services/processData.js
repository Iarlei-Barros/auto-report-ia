function processData(data){
    return data.map(post => ({
        title: post.title,
        length: post.body.length
    }));
}

module.exports = processData;