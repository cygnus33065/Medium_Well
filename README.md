This application takes inspiration from the website https://medium.com/. Our spin on the site, named **Medium Well**, features a variety of stories for users to read. Users can create an account to access the full features of the site. Our application allows authorized users to like/unlike stories, comment on stories, sort stories by category, and follow other users in order to see the content they've liked. To fully explore our site please visit https://medium-well.herokuapp.com/. All project planning was done on https://github.com/ via Wiki and can be viewed here: https://github.com/cygnus33065/Medium_Well/wiki. Our project planning process included creating a database schema, a feature list, user stories, and outlining frontend routes.

**The technologies our team used to build this application include:**

_RSS Feed:_ used to seed our application with preexisting stories; 
_Sequelize/PSQL:_ used to build our database and seed the tables with inputted data; 
_Node.js:_ allowed us to write and implement Javascript and build our application using Express; 
_Express:_ used as the server framework of our application; 
_Javascript:_ used to write front-end routes for each page/action in our application; 
_.pug:_ used to outline the structure of our application; 
_CSS:_ used to style pages and elements on our application; 


One feature of our application that displays the team's technical abilities is our user-auth implementation. Though this feature took us the longest, and provided many challenges, ultimately we are very proud of the outcome. We wrote a majority of this code without any guidance, and ended up implementing a fulling functioning user-auth that includes: the ability to create a new user account, the ability to log in, the ability for a user to log off, and the option to log in as a demo-user. Additionally, we wrote our application to only make certain features available if a user is logged in. For example, if a user tries to write a comment without being logged in they will be prompted to log in before they're allowed to do so. 

Another feature of our application that speaks to our technical abilities is the implementation of the user's ability to filter stories by various categories. This provides the user with a more personalized experience while using our app. We wrote a front-end route that upon the category being clicked on redirects the user to a page that renders only stories that are already identified as being in that category. 

A major challenge our team faced while building this application was implementing the use of AJAX to update our likes and comments without rerendering the entire page. While ultimately we were unsuccessful in acheiving this goal of ours, it certainly taught us valuable lessons along the way. We discovered that from the start our databases had not been set up in a way that made these implementations simple to include. As a result, we did our best to write code to implement these features without the use of AJAX. Though it was dissapointing that we could not solve this issue, we decided our ultimate goal was to have a polished and presentable application by the end of the week, and we acheived this.

Additionally, implementing our user-auth features provided many challenges. As mentioned, this portion of our application took the longest to develop. Specifically, we ran into issues when initially trying to give our app the ability to differentiate between authorized and unauthorized users. Through outside help and referencing our previous coding material, we were able to move past this road block and fully develop user-auth features that we are really proud of. 


The below code snippet highlights our application's ability to allow a user to like and unlike a story. The code checks the database to see if the user has already liked the story, and if so prevents them from liking again, and instead gives them the option to unlike the story. 

```
const isLiked = await UserLikedStory.findOne({where: {storyId, userId: user.id}});
    if(!isLiked){
        await UserLikedStory.create({
            userId: user.id,
            storyId
        })
    } else {
        await UserLikedStory.destroy({ where: {userId: user.id, storyId}});
    }
    const likeCount =  await UserLikedStory.count({where: {storyId}});
    res.render('story', {story, categories, comments, likeCount});

```
The below code snippet highlights a small portion of the CSS used to style our front-end. Our user interface is fully styled and we were able to implement fun stylistic features such as changing elements of the input field on forms when they're in focus. 

```
input[type=text]:focus{
    border: 1px solid #b19cd9;
    background-color: #b19cd9;
    color: white;
    width: 100%;
}
```