<h1> MongoDB-Association </h1>
A sample project to demonstrate Association of Entities in MongoDB

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
  A <strong>one-to-one relationship</strong> is a type of cardinality that refers to the relationship between two entities (see also entity–relationship model) A and B in which one element of A may only be linked to one element of B, and vice versa.<br/>
  <strong>Example</strong><br/>Consider Whatsapp. The relationship between your whatsapp account and status (Not the the one that expires in 24 hours). At any point of time, You have only one status and your status is yours only, not anybody else. For simplicity, assume no one else copied your status. Even though there are other ways to uniquely Identify a status. 
</p>
<h2> One-to-many </h2>
<p>
<strong>Wiki definition</strong><br/>
  A <strong>one-to-many relationship</strong> is a type of cardinality that refers to the relationship between two entities (see also entity–relationship model) A and B in which an element of A may be linked to many elements of B, but a member of B is linked to only one element of A.
  <br/><strong>Example</strong><br/>
  Consider Facebook. We can divide it into multiple separate entities, such as User, Comments, Posts etc. And all of these are related to each other.<br/>
  Lets consider two of them, User and Comments. Every comment is always written by a user. Hence, there is a relationsip between them. Now, lets try to know more about the nature of their relationship. A user can always have zero or more comments, but a comment is always written by only one user. Hence, it is a one to many relationship (Here, A is User and B is Comment).<br/>
  </p>
<h2> Many-to-many </h2>
<p>
  A <strong>many-to-many relationship</strong> is a type of cardinality that refers to the relationship between two entities A and B in which A may contain a parent instance for which there are many children in B and vice versa.
  <br/><strong>Example</strong><br/>
   Ok,lets switch back to whatsapp again.Since it is everyones favorite. Now, lets consider two entities Group and User. A user can be in multiple groups and a group can have multiple users. For example, lets say you have been currently added to three groups, "Friends Forever","We are the Badass","Laziest creatures". Taking one group into consideration, lets say "Friends Forever". In that group, you must be having many friends (unless everyone left you alone there or you created the group and didnt add anyone). Each person in the group is a user. So, your group have multiple users and at the same time you are in multiple groups. Hence, it is a many to many relationship.
  </p> 
   Another simplest example would be Relationship between courses and students.
   <br /><br />
 [You can learn more about differences in association between SQL and NoSQL Databse.](https://medium.com/@dis_is_patrick/mongodb-relations-26201385b919)
 
<h3> Implementation of Association in MongoDB </h3>
<p> It can me implemented using two approaches:<br/>
  <ol>
    <li>
      <strong>Embedding data</strong>
      <p>In this approach we embed a complete document inside another document. (Compare document to tables in SQL)
      </p>
    </li>
    <li>
    <strong>Referencing data</strong>
      <p>In this approach, only the id of the document is stored inside anothee document. And using the id, the document can       be referred when needed.</p>
    </li>
    </ol>
     </p>   

 
   
