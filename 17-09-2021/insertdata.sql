-- 2. insert at least 5 rows of values in each table


use students;

-- courses
INSERT INTO courses(coursename) VALUES("HTML"),("CSS"),("Bootstrap"),("JavaScript"),("ReactJS");

-- mentors
INSERT INTO mentors(mentorname,mentoremail) VALUES ("DINESH","dinesh@gmail.com"),
                                                   ("Nirmal","nirmal@gmail.com"),
                                                   ("Deepak","deepak@gmail.com"),
                                                   ("Arun","arun@gmail.com");


-- users
INSERT INTO users(username,useremail,mentorid) VALUES("DINESH","dinesh@gmail.com",2),
                                                    ("Nirmal","nirmal@gmail.com",1),
                                                    ("Deepak","deepak@gmail.com",4),
                                                    ("Arun","arun@gmail.com",3);


-- codekata
INSERT INTO codekata(number_of_problems,string_problems,userid) VALUES(22,13,1),
                                                                       (30,15,2),
                                                                       (25,10,3),
                                                                       (50,30,4);


-- topics
INSERT INTO topics(topic,courseid) VALUES("HTML Basics",1),
                                         ("CSS Basics",2),
                                         ("Bootstrap - Containers",3),
                                         ("JavaScript Basics",4),
                                         ("React Components",5);


-- tasks
INSERT INTO tasks(task,courseid) VALUES ("HTML Task",1),
                                         ("CSS Task",2),
                                         ("Bootstrap Task",3),
                                         ("JavaScript Task",4),
                                         ("React Task",5),;


-- attendence
INSERT INTO attendance(userid,courseid,topicsid,attended) VALUES(2,5,5,true),
                                                                (5,1,1,true)
                                                                (1,3,3,false)
                                                                (3,4,4,ture);


-- company drives
INSERT INTO company_drives(userid,company) VALUES (1,"Microsys"),
                                                    (3,"Amazon")
                                                    (5,"HCL")
                                                    (2,"TCS");
                                                    (4,"Wipro")


-- students activated courses
INSERT INTO students_activated_courses(userid,courseid) VALUES(1,1),(2,1),(3,5),(4,2);