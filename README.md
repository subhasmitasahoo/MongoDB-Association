# MongoDB-Association
A sample application to demonstrate Association of Entities in MongoDB

## Theory

### Definition
According to wikipedia definition,
**Association** defines a relationship between classes of objects that allows one object instance to cause another to perform an action on its behalf. 

It basically allows us to connect separate pieces of data or different entities of a complete system.There can be many types of relationship between different entities. We can group all relations into three categories:
**1. One-to-one
2. One-to-many
3. Many-to-many**

### One-to-one
Wiki definition
  A one-to-one relationship is a type of cardinality that refers to the relationship between two entities (see also entity–relationship model) A and B in which one element of A may only be linked to one element of B, and vice versa.
  Consider Whatsapp. The relationship between your whatsapp account and status (Not the the one that expires in 24 hours). At any point of time, You have only one status and your status is yours only, not anybody else. For simplicity, assume no one else copied your status. Even though there are other ways to uniquely Identify a status. 

### One-to-many
Wiki definition
  A one-to-many relationship is a type of cardinality that refers to the relationship between two entities (see also entity–relationship model) A and B in which an element of A may be linked to many elements of B, but a member of B is linked to only one element of A.
  Consider Facebook. We can divide it into multiple separate entities, such as User, Comments, Posts etc. But they are not completely isolated from each other. The application is build from the associations of them. 
  For example, consider User and Comments. Every comment is always written by a user.It doesnt exist, unless a user writes it. Hence, there is a relation between these two. Now, consider the relationship between them. A user can have zero or more comments, but a comment can have only one user at a time. i.e. A particular comment is always written by only one user. 
  For example, Consider, you have updated your profile picture. And you have got more than 500 likes and 100 comments, as you are awesome. But there is a particular comment that caught your attention, "You are my evergreen Crush." And now you check who commented this. And you find out a single name. Now, as you are too excited to know the person more who has cruch on you, you marched forward to check the persons profile. And there you got to know, that person has replied to others comments on his/her own profile picture.(IMP:Reply is also a comment). Ok, now close facebook and read this futher. 
  So, now you realise that, Oh,yaah!! A user can have multiple comments, but a comment is always written by only one User. So the relationship between User and Comment is ONE-TO-MANY.
  
  
  ### Many-to-many
   A many-to-many relationship is a type of cardinality that refers to the relationship between two entities A and B in which A may contain a parent instance for which there are many children in B and vice versa.
   Ok,lets switch back to whatsapp again.Since it is everyones favorite. Now, lets consider two entities Group and User. A user can be in multiple groups and a group can have multiple users. For example, lets say you have been currently added to three groups, "Friends Forever","We are the Badass","Laziest creatures". Taking one group into consideration, lets say "Friends Forever". In that group, you must be having many friends (unless everyone left you alone there or you created the group and didnt add anyone). Each person in the group is a user. So, your group have multiple users and at the same time you are in multiple groups. Hence, it is a many to many relationship.
   Another simplest example would be Relationship between courses and students.
   
 [You can learn more about differences in association between SQL and NoSQL Databse.](https://medium.com/@dis_is_patrick/mongodb-relations-26201385b919)
 
 ### Implementation of Association in MongoDB
  It can me implemented using two approaches:
  1. Embedding data
      In this approach we embed a complete document inside another document. (Compare document to tables in SQL)
      For example: Consider two entities USER(name, email,posts) and POST(title, content).
      Here the document would look something like this.
        {
          \_id: 123452,
          name: "Queena",
          email: "queenaiam@gmail.com",
          posts:\[
                  { 
                    \_id: 5a2e3be2b3ca8a59d8dcffa9,
                    title: "Diet",
                    content: "I will be on diet from tomorrow"
                  },
                  { 
                    \_id: 5a2e3bcbf706bc59c232fec5,
                    title: "Coding",
                    content: "I love coding"
                  }
          ]
        }
   2.  Referencing data:
          In this approach, only the id of the document is stored inside anothee document. And using the id, the document can           be referred when needed. For example, In the example below, id of multiple POSTs is stored inside the USER document.
        {
          \_id: 123452,
          name: "Queena",
          email: "queenaiam@gmail.com",
          posts: \[ 5a2e3bcbf706bc59c232fec5,
                    5a2e3be2b3ca8a59d8dcffa9, ]
        }

 
   