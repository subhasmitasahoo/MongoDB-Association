<h1> MongoDB-Association </h1>
A sample application to demonstrate Association of Entities in MongoDB

<h2> Theory </h2>

<h3> Definition </h3>
<p>
<strong>Wiki definition</strong><br/>
<strong>Association</strong> defines a relationship between classes of objects that allows one object instance to cause another to perform an action on its behalf. 
  
It basically allows us to connect separate pieces of data or different entities of a complete system.There can be many types of relationship between different entities. We can group all relations into three categories:<br />
<ol>
  <li>One-to-one</li>
  <li>One-to-many</li>
  <li>Many-to-many</li>
 </ol>
 </p>
<h2> One-to-one </h2>
<p>
<strong>Wiki definition</strong><br/>
  A one-to-one relationship is a type of cardinality that refers to the relationship between two entities (see also entity–relationship model) A and B in which one element of A may only be linked to one element of B, and vice versa.
  
  Consider Whatsapp. The relationship between your whatsapp account and status (Not the the one that expires in 24 hours). At any point of time, You have only one status and your status is yours only, not anybody else. For simplicity, assume no one else copied your status. Even though there are other ways to uniquely Identify a status. 
</p>
<h2> One-to-many </h2>
<p>
<strong>Wiki definition</strong><br/>
  A one-to-many relationship is a type of cardinality that refers to the relationship between two entities (see also entity–relationship model) A and B in which an element of A may be linked to many elements of B, but a member of B is linked to only one element of A.
  
  Consider Facebook. We can divide it into multiple separate entities, such as User, Comments, Posts etc. But they are not completely isolated from each other. The application is build from the associations of them. 
  
  For example, consider User and Comments. Every comment is always written by a user.It doesnt exist, unless a user writes it. Hence, there is a relation between these two. Now, consider the relationship between them. A user can have zero or more comments, but a comment can have only one user at a time. i.e. A particular comment is always written by only one user.
  
  For example, Consider, you have updated your profile picture. And you have got more than 500 likes and 100 comments, as you are awesome. But there is a particular comment that caught your attention, "You are my evergreen Crush." And now you check who commented this. And you find out a single name. Now, as you are too excited to know the person more who has cruch on you, you marched forward to check the persons profile. And there you got to know, that person has replied to others comments on his/her own profile picture.(IMP:Reply is also a comment). Ok, now close facebook and read this futher. 
  
  So, now you realise that, Oh,yaah!! A user can have multiple comments, but a comment is always written by only one User. So the relationship between User and Comment is ONE-TO-MANY. 
  </p>
<h2> Many-to-many </h2>
<p>
  A many-to-many relationship is a type of cardinality that refers to the relationship between two entities A and B in which A may contain a parent instance for which there are many children in B and vice versa.
  
   Ok,lets switch back to whatsapp again.Since it is everyones favorite. Now, lets consider two entities Group and User. A user can be in multiple groups and a group can have multiple users. For example, lets say you have been currently added to three groups, "Friends Forever","We are the Badass","Laziest creatures". Taking one group into consideration, lets say "Friends Forever". In that group, you must be having many friends (unless everyone left you alone there or you created the group and didnt add anyone). Each person in the group is a user. So, your group have multiple users and at the same time you are in multiple groups. Hence, it is a many to many relationship.
  </p> 
   Another simplest example would be Relationship between courses and students.
   <br />
 [You can learn more about differences in association between SQL and NoSQL Databse.](https://medium.com/@dis_is_patrick/mongodb-relations-26201385b919)
 
<h3> Implementation of Association in MongoDB </h3><br/>
<p> It can me implemented using two approaches:<br/> 
  <strong>1. Embedding data:</strong>
          In this approach we embed a complete document inside another document. (Compare document to tables in SQL)
      For example: Consider two entities USER(name, email,posts) and POST(title, content).
      Here the document would look something like this.<br/>   
  <strong>2. Referencing data:</strong> 
          In this approach, only the id of the document is stored inside anothee document. And using the id, the document can       be referred when needed. For example, In the example below, id of multiple POSTs is stored inside the USER document.  
     </p>   

 
   
