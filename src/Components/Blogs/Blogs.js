import React from 'react';

const Blogs = () => {
  return (
    <div className='container'>
      <h2 className='font-2xl font-bold'>     
      13.1 Difference between `javascript` and `nodejs`
      <p className='text-center  font-semibold text-xl'> Answer : Javascirpt is a progamming language that is usually used to written  scripte in the clientside , can only be run in the browser, and also can play with dom and HTML and also use in front end development Where as Node is a java script runtime environment which is usually use in seversite and javascript can run outside in the browser with Node.</p>
      </h2>
      <h2 className='font-2xl font-bold'>
    13.2 When should you use `nodejs` and when should you use `mongodb`
    
    <p className='text-center  font-semibold text-xl'>
    The  MongoDB is a database where we can store data and NodeJS helps us to to connect our front end site or client site  to database.
    </p>

    </h2>
    <h2 className='font-2xl font-bold'> 
    13.3 Differences between `sql` and `nosql` databases.
    <p className='text-center  font-semibold text-xl'>
    Sql database is a  RDBMS Relation Database Management System  where as no-sql database is a no Relation or distribution Database system
Sql database have fixed or static or predefined schema whereas no-sql database have dynamic schema

    </p>
    </h2>
    <h2 className='font-2xl font-bold'> 
    13.4 What is the purpose of `jwt` and how does it work
    <p className='text-center  font-semibold text-xl'>
    JSON Web Token is  a standerd used to create accesess token for an application . The server creates aa token that certifies the user identity and sent it to the client . The client send it back to the server for every subsquent request . Beacuse of the the server knows that the request come from a specific user
    </p>
    </h2>
    </div>
  );
};

export default Blogs;