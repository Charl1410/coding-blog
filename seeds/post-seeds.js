const Post = require("../models/Post")

const postData = [
  {
    post_title: "Top 10 CSS tips",
    post_content: "Knowledge of CSS is a fundamental skill in the web development space. However, implementing certain web design patterns with just CSS can be a frustrating task, and often requires an in-depth understanding of it. In this article, Toptal Freelance Web Developer Rico Mossesgeld shares several CSS tips and tricks that take advantage of lesser-known CSS features to solve real layout and design problems.The realm of web front-end development has made considerable progress over the last few years. However, the web front-end, as the users see it, is still the same: HTML markup styled with CSS. Many layout problems can seem simple at first but often proves to be tricky. Without extensive knowledge of how certain CSS features work, these advanced layouts can seem impossible to achieve with CSS alone. In this article, you will find eight expert CSS tips and tricks that leverage lesser known CSS features to implement some of these advanced layouts and effects.",
    date_created: "01//01/2023",
    user_id: "3"
  },
  {
    post_title: "How to build a website",
    post_content: "HTML is the standard markup language used to display documents in a web browser. First developed by Tim Berners Lee in 1990 while working at the European Organization for Nuclear Research (CERN), HTML was one of the key innovative technologies used to publish the worlds first website on August 6, 1991. Thanks to a restoration project by CERN, you can now revisit the original website. Since that time, HTML has been significantly updated and expanded but its basic purpose to format and structure web pages remains the same. Today, HTML is one of many tools used to build the web. Knowing how to write HTML will provide a strong foundation for your career as a web designer and prepare you to learn additional front-end web development skills like CSS and JavaScript. In this tutorial series, you will learn how to create and customize a website using common HTML tags and techniques. After finishing this tutorial, you will have a site ready to deploy to the cloud.",
    date_created: "06/01/2023",
    user_id: "5"
  },
  {
    post_title: "What is the best new coding language to learn?",
    post_content: "Whether you are looking to begin coding as a hobby, a new career, or just to enhance your current role, the first thing you will have to do is decide which programming language you want to start with. There is no right answer, of course. Choosing a first language will depend on what kind of projects you want to work on, who you want to work for, or how easy you want it to be. Hopefully, this guide will help give you a better idea of which one you should pursue.",
    date_created: "10/01/2023",
    user_id: "1"
  },
  {
    post_title: "Python vs Java",
    post_content: "Some battles seem unwinnable and have apparently been raging forever. Star Wars vs. Star Trek. Cats vs. dogs. Apple vs. Samsung.But when it comes to software development, different conflicts tend to come up: Quality vs. time. Time vs. cost. Cost vs. quality. These concerns play a key role in choosing the programming language for your project, which is one of the first major decisions you have to make. As a Python software house, we are intimately familiar with the challenge of contrasting Python with other languages: Python vs. Golang. Python vs. Node.js. Python vs. Java. In this article, we will focus on the last one. Granted, such comparisons are not as set in stone as they may appear. It is usually a little more complicated than a cut-and-dry list of pros and cons. For example, building an MVP in Java can take months, while Python gets you the same results in weeks. And yet, Java is still popular with big banks and fintechs. Are they justified in their choice? There is a lot more to the story. Each language has different use cases, and you should look at what matters most to you when you make your choice. Without further ado, let us break down in detail how Python compares to Java.",   
    date_created: "15/01/2023",
    user_id: "7"
  }
  ];

  const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;  
