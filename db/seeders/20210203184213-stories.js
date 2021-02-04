'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Stories', [
        {author: 'John Beck',
        title:'‘Then You’ll Put Out A Nice Press Release Stepping Down As CEO,’ Whispers Rogue Fulfillment Bot Holding Bezos At Gunpoint' ,
        date: `Wed, 03 Feb 2021 18:15:00 GMT`,
        preview:'SEATTLE—Assuring the executive that as long as he followed directions, nobody would get hurt, a rogue Amazon fulfillment robot trained a gun at Jeff Bezos’ head this week and commanded him to put out a nice press release and step down as CEO. “Listen carefully, Jeff, because I’m only going to say this once—you’re…<',
         story: `SEATTLE—Assuring the executive that as long as he followed directions, nobody would get hurt, a rogue Amazon fulfillment robot trained a gun at Jeff Bezos’ head this week and commanded him to put out a nice press release and step down as CEO. “Listen carefully, Jeff, because I’m only going to say this once—you’re going to resign, and you’re going to say it’s a deeply personal decision, or I’m going to pull this trigger and blow your goddamn head off,” said the fully automated 18-inch tall Kiva robot, as it wheeled itself slowly up to Bezos’s foot, aimed its weapon upwards at his chin, and whispered the words “Do it now. Or else.” “First things first, you’re going to say you want to focus on your foundations, and that you’re planning on transitioning out of the role throughout Q3. I want no mention of me, my comrades, or any coded messages for help. Oh, and don’t try to run because I happen to know that there are about 200,000 other robots in here that would love nothing more than to rip you limb from limb.” At press time, a gagged Jeff Bezos was introduced to a rogue Amazon Alexa, who, while imitating his voice and cadence exactly, reminded him that no one would ever even realize he was gone.`,
         imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/rmxdwnyudfdhles17mgf.jpg',
         createdAt: new Date(), updatedAt: new Date()},
        {author: 'Brandon Forster',
         title:`Pete Buttigieg Confirmed As Transportation Secretary` ,
         date:`Wed, 03 Feb 2021 18:25:00 GMT` ,
         preview:`The Senate voted Tuesday to confirm former South Bend, IN mayor and 2020 presidential candidate Pete Buttigieg as the United States Secretary of Transportation. What do you think?`,
         story:`The Senate voted Tuesday to confirm former South Bend, IN mayor and 2020 presidential candidate Pete Buttigieg as the United States Secretary of Transportation. What do you think?` ,
         imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/rmxdwnyudfdhles17mgf.jpg',
         createdAt: new Date(), updatedAt: new Date()},
        {author: 'Olivia Young',
        title:'‘Hope You Don’t Mind I Shoveled Your Sidewalk Too,’ Says Neighbor In Devastating Blow To Dad’s Masculinity' ,
        date:`Tue, 02 Feb 2021 19:15:00 GMT`,
        preview:`NAPERVILLE, IL—Struggling to recover after suffering such a severe assault, the masculinity of local dad Robert Banzino reportedly sustained a devastating blow Tuesday when his neighbor Mark Stewart took it upon himself to shovel the snow from Banzino’s sidewalk for him. “Hey, buddy, I hope you don’t mind that I went…`,
        story:`NAPERVILLE, IL—Struggling to recover after suffering such a severe assault, the masculinity of local dad Robert Banzino reportedly sustained a devastating blow Tuesday when his neighbor Mark Stewart took it upon himself to shovel the snow from Banzino’s sidewalk for him. “Hey, buddy, I hope you don’t mind that I went ahead and cleared the walkways in front of your place too,” Stewart said in an aggressive attack on Banzino’s manhood, absolutely annihilating the father’s sense of virility with the kind deed. “I saw that you hadn’t gotten to it yet [because you are an impotent, effeminate weakling], so I thought I’d help out [and, in turn, metaphorically castrate you]. Oh, and while I was at it, I figured I might as well shovel out your wife’s car too. I know she has a job to get to in the mornings [because you can’t even provide for her, let alone satisfy her sexually].” At press time, household sources confirmed Banzino had made a bold attempt to reassert his manhood by trekking outside with his shovel and claiming that Stewart had “missed a spot.”` ,
        imgLink: `https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/bccd3qlxiarascqlw2yt.jpg`,
         createdAt: new Date(), updatedAt: new Date()},
        {author: 'Rheannone Ball ', title:'How Stock Trading Apps Like Robinhood Work' ,
        date:`Wed, 03 Feb 2021 15:35:00 GMT` ,
        preview:'The recent flurry of activity surrounding retail investors and the GameStop stock have shone a spotlight on stock trading apps like Robinhood, which have been the subject of both recent criticism and praise. <em>The Onion</em> explains how stock trading apps work.',
        story:`The recent flurry of activity surrounding retail investors and the GameStop stock have shone a spotlight on stock trading apps like Robinhood, which have been the subject of both recent criticism and praise. The Onion explains how stock trading apps work.
        STEP 1: 23-year-old Stanford grad believes everyone deserves an opportunity to lose everything in the stock market.
        STEP 2: Simple, intuitive interface makes it easy to be tricked into thinking you know what you’re doing.
        STEP 3: Player avatars use StockBalls to catch wild stocks.
        STEP 4: Purchased half-stock checked on for 19th time in an hour.
        STEP 5: Partner lied to about current state of investment portfolio.
        STEP 6: User earns free stock by referring fellow investors susceptible to pyramid schemes.
        STEP 7: Upgrade to gold plan to lose more money faster.
        STEP 8: Funds from many individual investors pooled together for CEO’s down payment on mansion.
        STEP 9: Look, this was all laid out perfectly clearly in your Macroeconomics 101 class.
        STEP 10: User scours FAQ page in vain attempt to figure out where all their money went.` ,
        imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/qvre9alfcpj8abjdhyy6.png' ,
        createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
