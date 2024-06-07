//Inserting the which we need to query 
//1)inserting users details
db.users.insertMany([
    { "user_id": 1, "user_name": "Nivetha shree", "user_email": "nivetha@gmail.com", "user_phone_number": "1234567890", "mentor_id": 101 },
    { "user_id": 2, "user_name": "Swetha shree", "user_email": "swetha@gmail.com", "user_phone_number": "1238767890", "mentor_id": 102 },
    { "user_id": 3, "user_name": "kayalpavi shree", "user_email": "kayal@gmail.com", "user_phone_number": "1234567654", "mentor_id": 103 },
    { "user_id": 4, "user_name": "Nithya shree", "user_email": "nithya@gmail.com", "user_phone_number": "9144567890", "mentor_id": 104 },
    { "user_id": 5, "user_name": "vidhya shree", "user_email": "vidhya@gmail.com", "user_phone_number": "1245667890", "mentor_id": 105 }
  ]);
//2)inserting attendances to the user
db.attendance.insertMany([
    { "session_id": 1, "user_id": 1, "date": new Date("2020-10-12"), "status": "present" },
    { "session_id": 2, "user_id": 2, "date": new Date("2020-10-08"), "status": "present" },
    { "session_id": 3, "user_id": 3, "date": new Date("2020-10-10"), "status": "absent" },
    { "session_id": 4, "user_id": 4, "date": new Date("2020-10-20"), "status": "present" },
    { "session_id": 5, "user_id": 5, "date": new Date("2020-10-22"), "status": "absent" }
  ]);

//3)inserting codekata problems solved
  db.codekata.insertMany([
    { "session_id": 1, "user_id": 1, "date": new Date("2020-10-19"), "problem_solved": 5 },
    { "session_id": 2, "user_id": 2, "date": new Date("2020-10-08"), "problem_solved": 10 },
    { "session_id": 3, "user_id": 3, "date": new Date("2020-10-14"), "problem_solved": 20 },
    { "session_id": 4, "user_id": 4, "date": new Date("2020-10-02"), "problem_solved": 9 },
    { "session_id": 5, "user_id": 5, "date": new Date("2020-10-25"), "problem_solved": 25 }
  ]);

//4)inserting task  
  db.tasks.insertMany([
    { "task_id": 1, "user_id": 1, "task_description": "MongoDB assignment", "due_date": new Date("2020-10-01"), "status": "submitted" },
    { "task_id": 2, "user_id": 2, "task_description": "sql bolt assignment", "due_date": new Date("2020-10-04"), "status": "submitted" },
    { "task_id": 3, "user_id": 3, "task_description": "axios assignment", "due_date": new Date("2020-10-23"), "status": "not submitted" },
    { "task_id": 4, "user_id": 4, "task_description": "router assignment", "due_date": new Date("2020-10-29"), "status": "not submitted" },
    { "task_id": 5, "user_id": 5, "task_description": "node.js assignment", "due_date": new Date("2020-10-15"), "status": "submitted" }
  ]);

//5)inserting about company_drive
  db.company_drives.insertMany([
    { "drive_id": 1, "company_name": "NMN company", "date": new Date("2020-10-29") },
    { "drive_id": 2, "company_name": "BOSH company", "date": new Date("2020-10-24") },
    { "drive_id": 3, "company_name": "VVN company", "date": new Date("2020-10-03") },
    { "drive_id": 4, "company_name": "MLM company", "date": new Date("2020-10-12") },
    { "drive_id": 5, "company_name": "SNS company", "date": new Date("2020-10-16") }
  ]);

//6)inserting topics
  db.topics.insertMany([
    { "topic_id": 1, "topic_name": "Introduction to MongoDB", "description": "This topic covers the basics of MongoDB, including installation, basic commands, and CRUD operations.", "date": new Date("2020-10-22") },
    { "topic_id": 2, "topic_name": "Advanced MongoDB", "description": "This topic dives deeper into MongoDB features such as indexing, aggregation, and replication.", "date": new Date("2020-10-19") },
    { "topic_id": 3, "topic_name": "JavaScript Basics", "description": "An introductory topic covering the basics of JavaScript, including variables, loops, and functions.", "date": new Date("2020-10-09") },
    { "topic_id": 4, "topic_name": "Node.js Fundamentals", "description": "This topic introduces Node.js, explaining its core concepts, including modules, events, and file system interaction.", "date": new Date("2020-10-25") },
    { "topic_id": 5, "topic_name": "Express.js Basics", "description": "A beginner's guide to Express.js, covering routing, middleware, and building simple web applications.", "date": new Date("2020-10-05") }
  ]);

//7)inserting mentor details
  db.mentors.insertMany([
        { "mentor_name": "Thirupathi", "email_id": "thirupathi@gmail.com", "phone_number": "1234567890", "student_id_list": [1, 2, 3, 4, 5] },
        { "mentor_name": "Vasanth", "email_id": "vasanth@gmail.com", "phone_number": "1234567891", "student_id_list": [6, 7, 8, 9, 10] },
        { "mentor_name": "Arun kumar", "email_id": "arunkumar@gmail.com", "phone_number": "1234567892", "student_id_list": [11, 12, 13, 14, 15] },
        { "mentor_name": "Swathy", "email_id": "swathy@gmail.com", "phone_number": "1234567893", "student_id_list": [16, 17, 18, 19, 20] },
        { "mentor_name": "Ajith kumar", "email_id": "ajithkumar@gmail.com", "phone_number": "1234567894", "student_id_list": [21, 22, 23, 24, 25] }     
  ]);
  
//QUESTIONS AND ANSWER:

//1)Find all the topics and tasks which are thought in the month of October
guvidata> db.topics.find({date:{$gte: new Date("2020-10-01"),$lte: new Date("2020-10-31")}});
guvidata> db.tasks.find({ due_date: { $gte: new Date("2020-10-01"), $lte: new Date("2020-10-31") } });     

//2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
guvidata> db.company_drives.find({ date: { $gte: new Date("2020-10-15"), $lte: new Date("2020-10-31") } });      

//3)Find all the company drives and students who are appeared for the placement.
guvidata> db.company_drives.find({}, { "_id": 0, "company_name": 1, "student_id_list": 1 })

//4)Find the number of problems solved by the user in codekata
guvidata> db.codekata.aggregate([ { $group: { _id: "$user_id", total_problems_solved: { $sum: "$problem_solved" } } }] );

//5)Find all the mentors with who has the mentee's count more than 15
guvidata> db.mentors.aggregate([ { $project: { mentor_name: "$name", email_id: "$email", phone_number: "$phone_number", mentor_count: { $size: "$student_id_list" } } }, { $match: { mentor_count: { $gt: 15 } } }] );

//6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
guvidata>  db.attendance.aggregate([ { $match: { date: { $gte: new Date("2020-10-15"), $lte: new Date("2020-10-31") }, status: "absent" } }, { $lookup: { from: "tasks", localField: "user_id", foreignField: "user_id", as: "tasks" } }, { $match: { $or: [ { "tasks": { $exists: false } }, { "tasks.status": { $ne: "submitted" } }, { "tasks.due_date": { $lt: new Date("2020-10-15"), $gt: new Date("2020-10-31") } }] } }, { $group: { _id: "$user_id" } }, { $count: "total_users" }] );

