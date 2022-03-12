import * as constants from './const.js'
export function getUserIds(posts){
    var ids = {};
    posts.forEach(el =>{
        if (typeof ids[el.userId] === 'undefined'){
            ids[el.userId]=1;
        }
    })
    return Object.keys(ids);
}
export function generatePostSection(postsList){
    let postsByAuthor = document.createElement('div');
    postsByAuthor.classList.add('postsSection_postsByAuthor');
    // generate author info
    let authorInfo = generateAuthorInfo(postsList[0].userId);
    postsByAuthor.append(authorInfo);
    // ====================
    
    // generate posts list
    let posts = document.createElement('div');
    posts.classList.add('postsSection_postsByAuthor-posts');

    postsList.forEach(el => {
        let postsListItem = generatePosts(el);
        posts.append(postsListItem);
    });
    // ==================

    postsByAuthor.append(posts);
    document.querySelector('.postsSection .sectionInner').append(postsByAuthor);
}
function generateAuthorInfo(userId){
    let authorInfo = document.createElement('div');
    authorInfo.classList.add('postsSection_postsByAuthor-autorInfo')
    let authorPhoto = document.createElement('img');
    authorPhoto.classList.add('authorPhoto');
    authorPhoto.src = `img/png/${userId}.png`;
    let atuhorName = document.createElement('span');
    atuhorName.classList.add('atuhorName');
    atuhorName.innerText = constants.atuhorNameList[userId-1];
    authorInfo.append(authorPhoto);
    authorInfo.append(atuhorName);
    return authorInfo;
}
function generatePosts(el){
    let postsListItem = document.createElement('div');
    postsListItem.classList.add('postsSection_postsByAuthor-postsItem');
    
        // generate first row
        let itemFirstRow = document.createElement('div');
        itemFirstRow.classList.add('firstRow');
        let itemTitle = document.createElement('h3');
        itemTitle.classList.add('itemTitle');
        itemTitle.innerText = el.title
        let itemDate = document.createElement('time');
        itemDate.classList.add('itemDate');
        let date = new Date(constants.TODAY + (constants.MSONDAY * el.id));
        itemDate.datetime=`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        itemDate.innerText = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        itemFirstRow.append(itemTitle);
        itemFirstRow.append(itemDate);
        postsListItem.append(itemFirstRow);
        // ==================
        
        // generate second row
        let itemSecondRow = document.createElement('div');
        itemSecondRow.classList.add('secondRow');

        let quote = document.createElement('img');
        quote.classList.add('quote');
        quote.src = 'img/png/quote.png';
        let itemContent = document.createElement('p');
        itemContent.classList.add('itemContent');
        itemContent.innerText = el.body;


        itemSecondRow.append(quote);
        itemSecondRow.append(itemContent);
        postsListItem.append(itemSecondRow);
        return postsListItem;
}
