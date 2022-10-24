---
title: 'String to Byte Array'
excerpt: 'Convert a string to Byte Array in C#'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2011-07-03T05:35:07.322Z'
author:
  name: Rino Reji Cheriyan
  picture: '/assets/blog/authors/rrc.jpeg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

String to byte[]  
A simple code to convert a string to byte array

```c-sharp
UTF8Encoding encoding = new UTF8Encoding();
return encoding.GetBytes("My string to convert!");
```
