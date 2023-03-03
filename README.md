# UpTask

Project by **NoBugs4Us** Team for the Software Engineering Course.

## **Team Members and Roles:**

[Berlinschi Stefan-Cristian](https://github.com/StefanBerlinschi) **(Frontend Developer)**

[Fritz Raluca-Mihaela](https://github.com/ralucafritz) **(QA)**

[Manole Patricia-Theodora](https://github.com/PatriciaManole) **(QA)**

[Mihai Radu-Ioan](https://github.com/rimihai2001) **(Project Manager + Full Stack Developer)**

[Pop Maria](https://github.com/MariaPop24) **(Designer + Frontend Developer)**

[Stanescu Maria-Raluca](https://github.com/maria-raluca-st) **(Backend Developer)**


## **Problem Statement**

It is a well known fact that students struggle with remembering deadlines for all the school work they receive. They always try to note all they have to do on papers that easily get lost through all the notebooks and books they carry every day. That often leads to not handling the homework in time or finding out that they have 24h until a project’s due date. We all have faced this problem in school or university and know how uncomfortable it can be. 

Now that we live in the digital era, tracking tasks can finally become a lot easier through a To do list app. This way, everybody can just track all the homework and projects they need to do and see the nearest due dates. If a person is really unorganized they can use the app for daily and weekly tasks as well so their life can become a bit more organised. After only a few clicks , their life can become 100 times easier and they will save the environment as well because they finally can get rid of the tons of papers they used to make for lists with tasks they needed to complete. 


## **Technologies**

**Frontend**

- Angular
- HTML5
- SCSS
- TypeScript
- Figma


**Backend**

- TypeScript
- Firebase


## **Functional Decomposition**

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Functional_Decomposition.png)

## **Non-functional Requirements List**

_**Performance:**_ 
- The login should successfully load in less than 3 seconds.
- Each page should load in less than 2 seconds.
- The application should not have a maximum number of accounts registered.
- The application should handle 500 authentication requests / second. 
- The application should handle 100 users simultaneously.

_**Security:**_
- Database security to prevent the leak of sensitive information.
- Only a password which contains at least one digit, one capital letter and one non-capital letter is allowed when creating an account.

_**Portability and compatibility:**_
- The web application should be available for all devices.
- On mobile devices, the web application should be responsive.
- All the features should be available on any device, browser and operating system. 

_**Usability:**_
- Users should be able to reach their profile data from any page with one click.
- Users should be able to logout from any page with one click.
- Using the button with a plus sign starts the process of creating a new task.
- Using the button with a bin sign while viewing a task starts the deleting process of that task.
- Using the button with a crayon sign while viewing a task starts the editing process of that task.


_**Reliability:**_
- The application versions before the final version will be available only during test times.
- Core functionality will always be online.
- The application must perform without failure in 95 % of use cases during a month.

_**Integrity:**_
- All features are free of charge.
- The date format must be as follows: DD/MM/YYYY.

## **Activity/State Diagram**

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/UML_Diagram.png)

## **Prioritized Product Backlog**

**Product Backlog**

- **User Account** _(DEV Sprint 1 + DEV Sprint 2 + DEV Sprint 4)_
  - SignUp (Filler Week + Week 10)
  - Login (Week 10)
  - Logout (Week 10)
  - Edit Profile (Week 10)
  - Account Info (Week 11)
  - Auto Login (Week 14)


- **Tasks Planner** _(DEV Sprint 2 + DEV Sprint 3)_
  - Add Tasks (Week 11)
  - View All Tasks (Week 11)
  - View Today's Tasks (Week 12)
  - Delete Task (Holiday Week 1)
  - Completed Tasks (Holiday Week 1)
  - Click task for details (Holiday Week 2)
  - Edit Task (Holiday Week 2)


- **Alerts** _(DEV Sprint 4)_
  - Healthy Alerts (Week 13)
  - Healthy Messages (Week 13)
  - Congratulations Messages (Week 14)
  - Congratulations Alerts(Week 14)
  - Remaining Tasks Alerts (Week 13 + Week 14)


**User Stories**

- **DEV Sprint 1**
  - As a user, I want to create an account so that I can access all the app features.
  - As a user, I want to login into the app so that I can access all the data and tasks stored.
  - As a user, I want to logout so that nobody beside me can access my data from my computer.
  - As a user, I want to be able to edit my profile so that I can update my account data.

- **DEV Sprint 2**
  - As a user, I want to see my account information so that I can check if all my data is correct.
  - As a student, I want to add tasks so that I can add every deadline that I have at the university.
  - As a student, I want to see all the tasks so that I can see how many tasks I want to see how many deadlines I have in the next few weeks.
  - As a student, I want to see all the tasks that must be done today so that I can see what projects I have to work on today.

- **DEV Sprint 3**
  - As a user, I want to delete a task so that I don’t have to see tasks that are outdated.
  - As a user, I want to mark a task as completed so I can see how many tasks I have left.
  - As a user, I want to see the details of a task so that I can see relevant details about the task.
  - As a user, I want to edit a task so that I don’t have to delete a  task if the deadline has changed.

- **DEV Sprint 4**
  - As a user, I want to auto login into the app so that I can access my account without having to remember my password every time.
  - As a professor, I want to receive notifications about the remaining tasks so that I won’t forget about them.
  - As a student, I want to receive notifications and alerts so that I won’t forget to take care of my health on a busy day.
  - As a student, I want to receive congratulations messages so that it will help with my morale.



**Sprints**
- [Sprint 1](https://github.com/orgs/inginerie-software-22-23/projects/64)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Backlog_Sprint1.png)

- [Sprint 2](https://github.com/orgs/inginerie-software-22-23/projects/65)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Backlog_Sprint2.png)

- [Sprint 3](https://github.com/orgs/inginerie-software-22-23/projects/66)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Backlog_Sprint3.png)

- [Sprint 4](https://github.com/orgs/inginerie-software-22-23/projects/142): [Demo](https://drive.google.com/file/d/1MKUeyXqkuPF3muF3vL4qKRVZHTZCdmKS/view) + [Code](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/tree/2b92f0864a9a078c42e17369e0c299b21873f0a7)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/CapacityPlanner_Sprint4.png)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Backlog_Sprint4.png)

*Dates of sprint*: 12.12.2022 - 25.12.2022

*Team capacity* : 100%

*Sprint achievements*:

- Designed Home page
- Designed Account Info page
- Designed All tasks page
- Designed Today’s Tasks page

- Implemented FE + BE for Home page
- Implemented BE side for All Tasks
- Implemented BE for Today’s Tasks
- Implemented BE for Account Info page

- Added UI Avatars


*Burndown chart:*

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/BurndownChart_Sprint4.jpg)

*Retrospective Outcome*:

- What went well in the sprint:

During Sprint 4, we reached most of our setted goals. The requirements and designs matched with no issues encountered. We shipped on time with very few bugs that were fixed in a short amount of time. The collaboration was great and the team had a great time working together.

- What could be improved:

What could be improved so that the next sprint is even more productive is the planning, so that we make sure to reach a bigger part of our goals

- What we commit to improve in the next sprint:

What we commit to improve in the next sprint is dividing the tasks into sprints more efficient in order to minimize the pressure of deadlines on our team members

- [Sprint 5](https://github.com/orgs/inginerie-software-22-23/projects/154): [Demo](https://drive.google.com/file/d/1hcAQqWHvIja5jO3Uoe0bnF734I-28aCK/view) + [Code](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/tree/616c94d64dffaf9c8d42f30cd25c789d178175b7)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/CapacityPlanner_Sprint5.png)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Backlog_Sprint5.png)

*Dates of sprint*: 26.12.2022 - 08.01.2023

*Team capacity* : 100%

*Sprint achievements:*

- Fixed Loading Spinner infinite bug
- Changed Data Fetch logic

- Tested Loading Spinner
- Tested Logout
- Tested Auth Guard
- Tested Auth Service

- Implemented FE side for All Tasks
- Implemented FE for Today’s Tasks
- Implemented FE for Account Info page
- Implemented BE + FE for Edit Profile

- Edit Task page : Design , BE
- View Task page : Design , BE 
- Delete Task page : Design , BE , FE
- Completed Task page : Design , BE , FE, Testing


*Burndown chart*:

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/BurndownChart_Sprint5.jpg)

*Retrospective Outcome*:
- What went well in the sprint:

During sprint 5, just like in the last sprint, we reached a significant part of our goals. The application functionalities established for this sprint work at the highest standards. We also encountered very few bugs, but we managed to fix them in the shortest amount of time.

- What could be improved:

What could be improved so that we reach all the setted goals during the next sprint is that  we focus on the testing part of the development process of the application.

- What we commit to improve in the next sprint:

What we commit to improve during the next sprint is the testing of the flow and the functionalities of the application in order to ensure the quality of the product.

- [Sprint 6](https://github.com/orgs/inginerie-software-22-23/projects/168): [Demo](https://drive.google.com/file/d/1tQ_7NWiqXdk2Lr4SstPvr-4j4wo1KebO/view)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/CapacityPlanner_Sprint6.png)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Backlog_Sprint6.png)

*Dates of sprint*: 09.01.2023 - 22.01.2023

*Team capacity* : 100%

*Sprint achievements*:

- Tested Signup
- Tested Login
- Tested Edit Profile
- Tested Home Page
- Tested All Tasks page
- Tested Today’s Tasks page
- Tested Account Info page

- Delete task testing
- View task: FE, Testing
- Edit task:  FE, Testing
- Chose Alert/Messages/Snackbars Text

- Implemented Remaining Tasks Alerts: Design, FE, BE, Testing
- Implemented Remaining Tasks Message: Design, FE, BE, Testing
- Implemented Healthy Alerts: Design, FE, BE, Testing
- Implemented Healthy messages: Design, FE, BE, Testing
- Implemented Congratulations Alerts: Design, FE, BE, Testing
- Implemented Congratulations messages: Design, FE, BE, Testing
- Implemented Snackbar Events: Design, FE, BE, Testing

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/BurndownChart_Sprint6.jpg)

- What went well in the sprint:

During the last sprint of the development process of the app, we reached every goals we setted. The testing team did a great job by testing each functionality and ensuring the quality of the final product.

## **Project Charter Document**

**Description**

UpTask is a to-do list application meant to help students easily organize and manage their schoolwork and tasks.

**Objective**

Create an easy to use and intuitive interface where users could easily see, add, edit and delete tasks.

**Deliverables**
- A responsive web app that can be opened from any browser.
- Functionalities allowing account creation and editing.
- Functionalities allowing task creation, deletion and editing.

**Success Criteria** 

The applications will contain only the basic features of an application with this scope (Authentication, Task List and Alerts) in order to save memory and time loading as well as being easy to use by everybody, regarding their browsing skills.

**Budget**

Approx. 7 hours of work / week / member for 8 weeks, 336 hours team (6 members) total. 

**Risks**

The team lacks some expertise as it is the first time working with certain technologies such as Angular and Firebase for some of the members, so in order to minimize the risks, we decided to assign some of the tasks to more than one member of the team.

**Constraints**

- Users use basic applications usually on mobile.
- The time assigned by the team members to the project development is very restrictive and does not contain fixed hours in a day.
- The team does not contain an experienced Full Stack Developer.

**Assumptions**

- The web application will be used more on small devices than computers.
- The users will have a good internet connection.

**Stakeholders** 
- Course Professors
- Users  (Students, College Students, Professors) 
- NoBugs4Us Team

## **Roadmap**

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Roadmap.png)

## **Definition of Ready (DoR)**

- User story is clear and well-defined.
- User story acceptance criteria defined.
- User story dependencies identified.
- User story has business value.
- User story is achievable within a sprint.
- User story sized by the delivery team.
- Scrum team accepts UE artifacts.
- Performance criteria identified.
- The person who will accept the user story is identified.
- A team is able to 'demo' the user story.

## **Definition of Done (DoD)**

- Design reviewed
- Coding done
    - All "To Do" items completed
    - Builds without errors
    - Code refactoring
    - Code is in standard format
    - Code comments added
    - Code is checked
    - Code is inspected
- Testing done
    - Unit testing
    - Scalability testing
    - User acceptance testing
    - Testing report done
- Non-functional requirements met
- No defects
- Acceptance testing
- Uploaded and live on production repository
- Backlog updated
- Any deployment/configuration changes are communicated
- Task closed

## **Software Architecture Report**

**1. Introduction and Goals**
UpTask is an app that allows students and professors to make their life easier by tracking their daily tasks.

	**1.1 Requirement Overview**
	
	  The overall goal of UpTask is to have a paperless list with all the activities that you plan to do in the near future.  
	  
	  **1.1.1 Basic usage**
	  
    - User creates/ log into their account
    - Main page shows all upcoming tasks. If there are none, users can create them by clicking the plus sign in the empty column. 
    - All tasks can be edited, viewed, deleted or marked as complete/unfinished.
    - Today page shows the tasks that have the deadline set for the current date.
    - Profile page contains all the information about the account that can be edited pressing the edit button.
    
    **1.1.2 Sanity checks**
    
    - Checks password contains 1 capital letter, 1 lower case letter, 1 number and at least 6 characters
    - Checks that the email has a valid format
    - Checks forms have all the input valid

**1.2 Quality goals**
- *Accessibility:* UpTask has an easy to use design that can be fastly learned by every user.
- *Efficiency:* All the pages load very fast.

**1.3 Stakeholders**

*Software Architects*
- want to get a feeling of what architecture documentation for a specific system can look like
- would like to copy things (e.g. form, notation) for your daily work
- gain security for your own documentation projects

*Developers*
- also take on architectural tasks in a team
- get the desire to implement a to-do app themselves that will help in time management 
- are curious about specific suggestions on how to do this


**2.Constraints**
**Uptask** should:
- Run on the major operating systems( Windows, Linux, Mac-OS)
- Run within every major browser (Chrome, Edge, Firefox)
- Have an internet connection

**3.Context**

**3.1. Business Context**
- Users want an application to save them the To Do tasks, that is easy to use and very flexible.
- Users want an application that is responsive, so that it can be used anywhere they go, on any device.

**3.2 Technical Context**
- Google Firebase is used for the backend, so that the application has a higher stability.
- UI Avatars is the API used by the app to generate Avatars for the profile, by knowing the user full name.


**4. Solution Strategy** 
 
Implement UpTask in Angular+TypeScript with minimal external dependencies(Google Firebase, UI avatars) .

When the application is running all its features are available at the same time with the constraints presented previously.

**5. Architectural Decisions**

**5.1. Checking the external third-party apps postoped**

In the current revision, we assume that every third-party app used in UpTask (Google Firebase and UI Avatars) are working at optimal parameters. 


**5.2 Database Design**

The database is designed to have a simple fetch, so that the details of every user are stored in a table that has a unique username created by removing “@” and “.” from the domain.

Inside the table, there are two arrays, one that contains the basic info (full name and role) and one that contains the upcoming tasks.


**6. Quality Requirements**

- Someone with basic knowledge of UML and web applications wants to get started with the architecture of UpTask. The solution strategy and draft are revealed to him or her within 15 minutes.
- An architect who wants to use arc42 looks for a concrete sample content for any chapter of the template and immediately finds it in the documentation.
- An experienced TypeScript developer is looking for the implementation of a module described in the draft. It finds them without detours or outside help in the source code.
- A developer implements a new sorting system. He can integrate it into existing tasks without changing or translating existing code.
- In edit mode, the saved task is no longer completed if it is saved.
- An invalid form will be rejected by the system as it is recognized by the frontend or by the backend (in the authentication case).


**7. Risks**
- Without an Internet connection, the application is unavailable for the users.
- Without a good Internet connection, the UI Avatar could not work.
- Without a good Internet connection, the application can not fetch the active tasks and could not work.
- Without a good Internet connection, the application can not add another task to the list.


## **Testing**

**Unit Testing**

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Unit_Testing_1.png)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Unit_Testing_2.png)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Unit_Testing_3.png)

![Images](https://github.com/inginerie-software-22-23/proiect-inginerie-software-nobugs4us/blob/main/Documentation%20Resources/Unit_Testing_4.png)

**Scalability Testing**

*User/Number-Related Performance*

- The application does not have a maximum number of accounts registered.
- The application handles 500 authentication requests / second.
- The application handles 100 users simultaneously.
- Maximum total number of both export and import requests for a project allowed per minute: 20
- Maximum number of concurrent exports and imports: 50
- Maximum number of collection ID filters for export and import requests: 100

*Response Time*

- The authentication successfully loads in less than 3 seconds.
- Each page loads in less than 2 seconds.

*Memory Usage*

The web application uses between 58-62 kB Memory when running.

*CPU Usage*

The web application uses between 0-0.1% CPU when running on AMD Ryzen 5 4600H.

*Network Usage*

At every page load, the system:
- Makes 28 requests
- 4.3kB are transferred
- 8 MB resources are used 


**User Acceptance Testing (UAT)**

*Web Project Team Awareness / Preparations*

Has the project team been made aware of its role in advising on changes to business processes and procedures? 
YES

Has the project team been made aware of its role in providing support for all testing issues? 
YES

Has the project team been made aware of its role in tracking and managing website bugs? 
YES

*UAT Team Preparations*

Has the UAT team been defined?
YES

Does the UAT team understand its responsibility in executing the test cases and ensuring that the final outcomes of the tests are satisfactory?
YES

Has the UAT team been told about its role and responsibility in ensuring that all test case input sources and output results are documented?
YES

Has the UAT team agreed that the test cases provide comprehensive and effective coverage of all aspects of functionality of the application?
YES

Has the UAT team been told about its role in documenting bugs/problems and working with the project team to resolve problems identified during testing?
YES

Does the UAT team understand the responsibilities and required actions for each category of problem identified during testing?
YES

Has the UAT team been made aware of its role in accepting the results on behalf of the relevant user population?
YES

Does the UAT team understand that it must recognize any changes necessary to existing processes and
take a lead role in ensuring that the changes are made and communicated to other users?
YES

Does the UAT team understand its role in verifying performance on business critical functions?
YES

Does the UAT team understand its role in confirming the integrity of data?
YES

Does the UAT team understand its role in assessing system final production readiness?
YES


*Test Preparation*

Has the plan for acceptance testing been created?
YES

Have all possible system functions been described?
YES

Is all input data available that is required for testing?
YES

Has acceptance criteria been defined on which the completion of the acceptance test will be judged?
YES

Have all user specific constraints been considered?
YES

Has the testing procedure been defined?
YES

Have test cases been created to discover contradictions between the software product and the requirements?
YES

Have test cases been created to review whether timing constraints are met by the system?
YES


*Test Execution and Evaluation*


Were all steps of the test run documented?
YES

Was the acceptance test performed according to the test plan?
PARTIAL

Did the users review the test results?
YES

Are the services provided by the system in compliance with user requirements?
YES

Were all identified defects and issues resolved?
YES

Did the users judge acceptability in accordance with the predetermined criteria?
YES

Did each user sign off on output?
YES


