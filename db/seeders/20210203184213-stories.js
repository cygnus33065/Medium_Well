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
        createdAt: new Date(), updatedAt: new Date()},
        {author: 'Rheannone Ball ', title:'‘I Want To Go See Those Mountains Where It Looks Like Avatar,’ Says Biden In Speech Outlining Foreign Policy Agenda' ,
        date:`Thur, 02 Jan 2021 15:35:00 GMT` ,
        preview:'WASHINGTON—Vowing to provide the State Department with the funding and resources it required to pursue his administration’s goals, President Joe Biden announced “I want to go see those mountains where it looks like Avatar” in a speech Thursday outlining his foreign policy agenda.',
        story:`WASHINGTON—Vowing to provide the State Department with the funding and resources it required to pursue his administration’s goals, President Joe Biden announced “I want to go see those mountains where it looks like Avatar” in a speech Thursday outlining his foreign policy agenda. “The foundational principles of the next four years of diplomacy are restoring America’s place as a world leader, and getting to see those floating sky mountains from Avatar up close,” said Biden, adding that he had already reached out to James Cameron and the location scouts from Avatar to schedule a meeting in those mountains and improve diplomatic relations with “those big blue cat guys.” “In addition, my administration will not hesitate to pursue America’s interests in wondering how they found all those amazing hobbit hideaways in The Lord Of The Rings, as well as uncovering all intelligence about how they got bears to play musical instruments at Disney World. Thank you.” Biden also announced that a crucial part of his foreign policy agenda was containing China by ensuring that they didn’t get anywhere near those mountains from Avatar and “the secret gold or life force or whatever” that they contained inside.` ,
        imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1315/ieexkcqzszehvwu9w4cq.jpg' ,
        createdAt: new Date(), updatedAt: new Date()},
        {author: 'Brandon Forster ', title:'Republicans Accuse Ocasio-Cortez Of Not Being Anywhere Near Place They Told Capitol Mob She Would Be' ,
        date:`Sat, 08 Feb 2021 15:35:00 GMT` ,
        preview:'WASHINGTON—Pointing out the inconsistency in her personal account of the Jan. 6 insurrection, republicans accused New York Rep. Alexandria Ocasio-Cortez Thursday of not being anywhere near the place they told the Capitol mob she would be.',
        story:`WASHINGTON—Pointing out the inconsistency in her personal account of the Jan. 6 insurrection, republicans accused New York Rep. Alexandria Ocasio-Cortez Thursday of not being anywhere near the place they told the Capitol mob she would be. “She was supposed to be in a room just off the Capitol rotunda, which is where we told the angry white nationalists she’d be hiding, but she wasn’t even there,” said South Carolina Rep. Nancy Mace, one of the many republicans condemning Ocasio-Cortez for hiding in a completely different building during the insurrection instead of where her colleagues told the violent rioters they should expect to find her. “A quick examination of the Capitol grounds map we gave the insurrectionists will prove that while they stormed the area where we drew the big ‘X’, the representative was actually in a location that was nowhere close to there. We were all upset by the events that transpired that day, but to be in a different place than the one we told those hunting her she’d be is incredibly disappointing.” At press time, republicans were calling upon Ocasio-Cortez to deliver a full apology and vow to always be open about her exact whereabouts at all times to avoid misleading her potential killers in the future.` ,
        imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/bqucydwkruvtshdwlook.jpg' ,
        createdAt: new Date(), updatedAt: new Date()},
        {author: 'John Beck', title:'Man Scores Vintage Coin-Operated Texas Instruments Graphing Cabinet' ,
        date:`Mon, 17 Jan 2021 15:35:00 GMT` ,
        preview:'SEATTLE—Unable to believe his luck at uncovering the classic item, local man Alton Yates was reportedly overjoyed Wednesday after scoring a vintage coin-operated Texas Instruments graphing cabinet.',
        story:`SEATTLE—Unable to believe his luck at uncovering the classic item, local man Alton Yates was reportedly overjoyed Wednesday after scoring a vintage coin-operated Texas Instruments graphing cabinet. “I can’t believe I found one in such good condition,” said Yates, confirming that apart from an easily replaced cosine button the cabinet was completely functional and able to run a full range of equations. “It cost me $500, which is a little more than I wanted to spend, but I can’t resist the nostalgia—as soon as I look at this thing, it brings me right back to being a teenager, meeting up after school to watch classmates plot the amplitude, period, and phase shift of a standard graph while we all cheered them on.” Yates added that this new cabinet would fit perfectly in his rumpus room right next to his Addams Family-themed electronic spectrometer.` ,
        imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/bcjwyeeu3nezrfoooz5i.jpg' ,
        createdAt: new Date(), updatedAt: new Date()},
        {author: 'Olivia Young', title:'‘Home Gym Equipment Is Still Sold Out Everywhere,’ Man Hopes' ,
        date:`Sat, 08 Feb 2021 15:35:00 GMT` ,
        preview:'REDDING, CA—Convinced that any search would just be a futile waste of time, local man Brian Kirk speculated Tuesday that home gym equipment was still sold out everywhere.',
        story:`REDDING, CA—Convinced that any search would just be a futile waste of time, local man Brian Kirk speculated Tuesday that home gym equipment was still sold out everywhere. “I checked out a couple places back in June and they were out of stock, so I’m pretty sure that is still the case now,” said Kirk, content to sit back and blame his complete lack of physical activity on the fact a local Dick’s Sporting Goods had been out of free weights 10 months ago. “The resale market is pretty crazy too, I bet. I don’t want to get ripped off when I could just wait a few more months. In fact, I’m not even sure it’s legal to go running right now, and without cardio what’s the point? I’m mentally tough enough that I can hold out until 2022 before getting too desperate about exercising.” Kirk added that while grocery shopping had been considered acceptable for some time, it was still too risky to stop ordering takeout for every meal.` ,
        imgLink:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1315/tfceovddn5cwqh4puwdi.jpg' ,
        createdAt: new Date(), updatedAt: new Date()},
        

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
