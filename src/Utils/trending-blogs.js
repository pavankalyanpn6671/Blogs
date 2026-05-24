 const trendingBlogs = [
{
key:0,
title:"Exploring the Mountains of Switzerland",
titleLink:"exploring-the-mountains-of-switzerland",
category:"travel",
content:"Traveling through the Swiss Alps offers breathtaking landscapes, charming villages, and unforgettable adventures for nature lovers and photographers alike.",
previewContent:"A journey through Switzerland mountains.",
image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"
},

{
key:1,
title:"Top Beaches to Visit in Bali",
titleLink:"top-beaches-to-visit-in-bali",
category:"travel",
content:"Bali is famous for its crystal clear waters, vibrant culture, and stunning beaches that attract travelers from around the world every year.",
previewContent:"Discover Bali's best beaches.",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
},

{
key:2,
title:"Backpacking Across Europe",
titleLink:"backpacking-across-europe",
category:"travel",
content:"Backpacking across Europe is an exciting way to explore historic cities, diverse cultures, and delicious food while traveling on a budget.",
previewContent:"Backpacking tips for Europe.",
image:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
},

{
key:3,
title:"A Weekend in Paris",
titleLink:"a-weekend-in-paris",
category:"travel",
content:"Paris offers iconic landmarks like the Eiffel Tower, amazing food, artistic museums, and charming streets perfect for a romantic weekend.",
previewContent:"How to enjoy Paris in 2 days.",
image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
},

{
key:4,
title:"Future of Artificial Intelligence",
titleLink:"future-of-artificial-intelligence",
category:"technology",
content:"Artificial intelligence is transforming industries with automation, machine learning, and smarter digital solutions that improve productivity.",
previewContent:"AI trends shaping the future.",
image:"https://images.unsplash.com/photo-1518770660439-4636190af475"
},

{
key:5,
title:"Understanding Cloud Computing",
titleLink:"understanding-cloud-computing",
category:"technology",
content:"Cloud computing allows businesses to store data and run applications online, reducing infrastructure costs and improving scalability.",
previewContent:"Basics of cloud technology.",
image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa"
},

{
key:6,
title:"React vs Angular",
titleLink:"react-vs-angular",
category:"technology",
content:"React and Angular are popular frontend frameworks. React focuses on component based UI while Angular offers a full framework solution.",
previewContent:"Comparing React and Angular.",
image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c"
},

{
key:7,
title:"The Rise of Web Development",
titleLink:"the-rise-of-web-development",
category:"technology",
content:"Modern web development includes frameworks, responsive design, APIs, and powerful tools that help developers build scalable applications.",
previewContent:"Growth of modern web apps.",
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085"
},

{
key:8,
title:"Delicious Italian Pasta Recipes",
titleLink:"delicious-italian-pasta-recipes",
category:"food",
content:"Italian pasta recipes combine simple ingredients with rich flavors creating dishes loved by food enthusiasts around the world.",
previewContent:"Classic Italian pasta dishes.",
image:"https://images.unsplash.com/photo-1525755662778-989d0524087e"
},

{
key:9,
title:"Street Food Around the World",
titleLink:"street-food-around-the-world",
category:"food",
content:"Street food reflects culture and tradition offering unique flavors and affordable meals enjoyed by locals and travelers.",
previewContent:"Popular global street foods.",
image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"
},

{
key:10,
title:"Healthy Breakfast Ideas",
titleLink:"healthy-breakfast-ideas",
category:"food",
content:"Starting your day with a healthy breakfast boosts energy and helps maintain a balanced lifestyle.",
previewContent:"Simple healthy breakfasts.",
image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061"
},

{
key:11,
title:"Best Homemade Desserts",
titleLink:"best-homemade-desserts",
category:"food",
content:"Homemade desserts are perfect for family gatherings offering sweet flavors and comforting experiences.",
previewContent:"Easy homemade desserts.",
image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187"
},

{
key:12,
title:"Daily Habits for a Better Life",
titleLink:"daily-habits-for-a-better-life",
category:"lifestyle",
content:"Small daily habits like exercise, reading, and mindful living can greatly improve your physical and mental wellbeing.",
previewContent:"Healthy daily habits.",
image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88"
},

{
key:13,
title:"Minimalist Living Guide",
titleLink:"minimalist-living-guide",
category:"lifestyle",
content:"Minimalist living encourages simplicity, less clutter, and focusing on what truly matters in life.",
previewContent:"Benefits of minimalism.",
image:"https://images.unsplash.com/photo-1484101403633-562f891dc89a"
},

{
key:14,
title:"Work Life Balance Tips",
titleLink:"work-life-balance-tips",
category:"lifestyle",
content:"Maintaining work life balance helps reduce stress and improves productivity and happiness.",
previewContent:"Balancing work and life.",
image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7"
},

{
key:15,
title:"Morning Routine for Success",
titleLink:"morning-routine-for-success",
category:"lifestyle",
content:"Successful people often follow structured morning routines to stay productive and focused throughout the day.",
previewContent:"Powerful morning routines.",
image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773"
},

{
key:16,
title:"Importance of Online Learning",
titleLink:"importance-of-online-learning",
category:"education",
content:"Online learning platforms provide flexible education opportunities allowing students to learn anytime and anywhere.",
previewContent:"Growth of online education.",
image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
},

{
key:17,
title:"Top Programming Languages to Learn",
titleLink:"top-programming-languages-to-learn",
category:"education",
content:"Learning programming languages like JavaScript, Python, and Java opens many career opportunities in tech.",
previewContent:"Popular coding languages.",
image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
},

{
key:18,
title:"Benefits of Reading Books",
titleLink:"benefits-of-reading-books",
category:"education",
content:"Reading books improves knowledge, creativity, and communication skills for personal growth.",
previewContent:"Why reading matters.",
image:"https://images.unsplash.com/photo-1512820790803-83ca734da794"
},

{
key:19,
title:"How to Study Effectively",
titleLink:"how-to-study-effectively",
category:"education",
content:"Effective study techniques include active learning, time management, and consistent practice.",
previewContent:"Smart study methods.",
image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
},

{
key:20,
title:"Fitness Training for Athletes",
titleLink:"fitness-training-for-athletes",
category:"sports",
content:"Athletes follow strict fitness routines including strength training, endurance exercises, and balanced diets to maintain peak performance.",
previewContent:"Essential fitness routines for athletes.",
image:"https://images.unsplash.com/photo-1517649763962-0c623066013b"
},

{
key:21,
title:"Top Olympic Sports Moments",
titleLink:"top-olympic-sports-moments",
category:"sports",
content:"The Olympic Games have produced unforgettable moments where athletes push their limits and create history on the global stage.",
previewContent:"Memorable Olympic achievements.",
image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
},

{
key:22,
title:"Benefits of Playing Outdoor Sports",
titleLink:"benefits-of-playing-outdoor-sports",
category:"sports",
content:"Outdoor sports improve physical health, teamwork skills, and mental strength while encouraging an active lifestyle.",
previewContent:"Why outdoor sports are good for health.",
image:"https://images.unsplash.com/photo-1471295253337-3ceaaedca402"
}
    ];


export default trendingBlogs;