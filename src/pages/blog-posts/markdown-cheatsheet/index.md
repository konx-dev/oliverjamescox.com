---
path: "/markdown-cheatsheet"
date: "2018-09-20"
title: "What is Markdown?"
author: "Oliver Cox"
topic: "Resource"
thumbnail: "./md-splash.jpg"
description: "Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML."
published: true
---

I have to admit before working with the static site generator GatsbyJS I hadn't come across Markdown. In this post I am going to touch on what Markdown is and give a few of my personal opinions on why you should add it to your toolbelt and learn it.
## Markup's goofy sibling? no no no!

The goal of Markdown is to create readable documents. Simple! I've made docs every which way.. I personally like the readability of the syntax and ease of use compared to that of a markup language. A killer feature for me is the syntax used and more importantly, not used. Markdown adds no words or letters, but instead favouring the use of hashes, asterisks etc. Makes life much easier for content creators and nontechnical staff to both read and learn.

## The Cheatsheet
---

## Headers
Headers use multiples of hashes from 1 - 6 (biggest to smallest)

```
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

## Emphasis

```
Italics, with *asterisks* or _underscores_.

Bold, with **asterisks** or __underscores__.

Combining both with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Italics, with *asterisks* or _underscores_.

Bold, with **asterisks** or __underscores__.

Combining both with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

Oh! I love a list! sublists can be created with either tabs or double spaces. numbering doesn't matter and will increment regardless.

```
1. ordered list item
1. ordered list item

* un-ordered list item (using an asterisk)
- un-ordered list item (using a minus)
+ un-ordered list item (using a plus)

1. ordered list item
1. ordered list item
    1. ordered sublist item
    1. ordered sublist item

* un-ordered list item
    * un-ordered list item
```

1. ordered list item
1. ordered list item


* un-ordered list item (using an asterisk)
- un-ordered list item (using a minus)
+ un-ordered list item (using a plus)


1. ordered list item
1. ordered list item
    1. ordered sublist item
    1. ordered sublist item


* un-ordered list item
    * un-ordered list item

## Links

```
[Inline-style link](https://www.google.com)

[Inline-style link with title on hover](https://www.google.com "Google's Homepage")

[Reference-style link][reference text (case-insensitive)]

[Local repository file](../../../)

[Numbers for reference-style link definitions][1]

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com>

[reference text (case-insensitive)]: http://www.reddit.com
[1]: http://www.reddit.com
```

[Inline-style link](https://www.google.com)

[Inline-style link with title on hover](https://www.google.com "Google's Homepage")

[Reference-style link][reference text (case-insensitive)]

[Numbers for reference-style link definitions][1]

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com>

[reference text (case-insensitive)]: http://www.reddit.com
[1]: http://www.reddit.com

## Images

```
Inline-style: 
![alt text](./md-splash.jpg "What is Markdown article hero image")

Reference-style: 
![alt text][logo]

[logo]: https://XXXX.png "logo alt text"
```

Inline-style: 
![alt text](./md-splash.jpg "What is Markdown article hero image")

## Code & Syntax Highlighting

```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either surrounded with three back-ticks ```, or are indented with four spaces.

## Tables

Dreaded things.. actually work quite nicely! two variations of writing out the table as seen below:

```
|   Table Header    |   Table Header    |   Table Header    |
|-------------------|-------------------|------------------ |
| content           | content           | content           |

| Table Header | Table Header | Table Header |
--- | --- | ---
content | content | content

```

| Table Header | Table Header | Table Header |
--- | --- | ---
content | content | content

## Horizontal Line

Can be achieve with three or more of the following:
```

---

Hyphens

***

Asterisks

___

Underscores
```

---

The aim of this post is as a quick reference of some of the most common syntax I've personally reached for and for anyone looking for an introductory overview. For more the complete markdown spec, check out it out [here](https://daringfireball.net/projects/markdown/) on the creator's site.