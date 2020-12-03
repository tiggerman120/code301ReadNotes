# normalization

There are three main reasons to normalize a database.  The first is to minimize duplicate data, the second is to minimize or avoid data modification issues, and the third is to simplify queries. 

Duplicated information presents two problems:

It increases storage and decrease performance.
It becomes more difficult to maintain data changes.

These situations are modification anomalies. Database normalization fixes them. There are three modification anomalies that can occur:
insert anomaly
update anomaly
deletion anomaly

The last reason we’ll consider is making it easier to search and sort your data.  In the SalesStaff table if you want to search for a specific customer such as Ford, you would have to write a query like


SELECT SalesOffice
FROM SalesStaff
WHERE Customer1 = ‘Ford’ OR
      Customer2 = ‘Ford’ OR
      Customer3 = ‘Ford’

First Normal Form – The information is stored in a relational table with each column containing atomic values. There are no repeating groups of columns.
Second Normal Form – The table is in first normal form and all the columns depend on the table’s primary key.
Third Normal Form – the table is in second normal form and all of its columns are not transitively dependent on the primary key

