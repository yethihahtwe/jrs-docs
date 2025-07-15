# UEP JRS Application User Guide
(RBAC - Role-Based Access Control System)

IT Consultant: Erma Susanti & Rosalia Arum Kumalasanti

## 1. Login & User Roles
UEP (Urban Education Project) site can be accessed via https://uep.jrsthailand.org/ using browser (Chrome for the best view). Login according to each user's account. The system uses **Role-Based Access Control (RBAC)**, so the dashboard view is customized based on the user's role.

**Types of roles:**
1.  **Superadmin** – Specifically for the database manager and web developer to maintain the system and database.
2.  **Teachers**
3.  **Project Assistant (PA)**
4.  **Education Officer (EO)**
5.  **Project Officer (PO)**
6.  **Project Director (PD)**
7.  **Admin and Finance Assistant (AA)**

Each user can change their password via the right menu under **'Your User Name'** by selecting **'Profile & Change Password'**.

## 2. Initial Setup (Each Semester)
At the beginning of each semester, the **Program Director (PD)** needs to:

### 1) Manage Users
Create new user accounts for each staff member according to their role or responsibilities.
**Notes:**
*   **Name:** Can be changed to the actual staff name (the current names are just examples). After the training, the **PD** or **Superadmin** should manage users via the **Manage User** menu.
*   **User Status:** Choose between **Active** or **Resign** (set status to **Resign** if the staff is no longer active or has resigned).
*   **Volunteer Teachers:** A user account also needs to be created for each volunteer teacher, assigning them the role of **Teacher**.

### 2) Manage Courses
Create courses for the upcoming semester and set their status to **Active**. Courses must **not overlap** in schedule (no time conflicts allowed).

### 3) Manage Classes
*   Assign a teacher as the class instructor for each active course.
*   A course at the same level may have more than one class.
*   You may use class codes such as A, B, C, etc., if there are multiple classes. If there is only one class, the class code can be left blank.

### 4) Reports
The **Reports** section is accessible only by the **Program Director (PD)**.

## 3. Register and Inquiry Menu
Each UEP client must first be registered through the **Register** menu. After successful registration, their inquiry must be recorded using the **Inquiry** menu.

The **Register** and **Inquiry** menus are accessible to all user roles **except** those with the **'Teacher'** role. These menus can be accessed by users with the following roles:
-   Project Assistant (PA) : View & Add/Edit
-   Education Officer (EO) : View & Add/Edit
-   Project Officer (PO) : View & Add/Edit
-   Project Director (PD) : View, Add/Edit, & Delete
-   Admin and Finance Assistant (AA) : View & Add/Edit

## 4. Admissions Menu
The **Admissions** menu can be accessed by users with the following roles:
-   Project Director (PD) : View, Add/Edit & Delete
-   Project Assistant (PA) : View & Add/Edit
-   Education Officer (EO) : View & Add/Edit
-   Project Officer (PO) : View & Add/Edit

**Step-by-Step Process:**
1.  **Add Applicant**
    *   Use this to admit a new applicant (the client must already be registered as a UEP client).
    *   Select the client to be admitted, choose the course, and schedule the interview.
2.  **Input Interview Score**
    *   After the applicant is registered, input the interview score. The score can be edited later if there is any mistake.
    *   If the interview result is marked as **Passed**, the applicant will automatically appear in the **Student Records** list.

## 5. Students Menu
There are 4 types:

### a. Students Record
*   The **Student Records** menu displays two tables: one for **active students** and one for **non-active students** (history data).
*   For the list of active courses, each student who passes the admission process must be activated by clicking the green **'Activation Status'** button.
*   Next, fill in the **Student Enrollment** data by completing the following fields: **Test Score, Course and Level, Enrollment Status (select Active)**
*   After activation, the student's status can also be changed to other options: **Decline, Failed, Passed, or Withdrawn**. Click on Yellow button (**Change Status**).

The **Students Record** menu can be accessed by users with the following roles:
-   Teachers: View
-   Project Assistant (PA) : View
-   Education Officer (EO) : View & Add/Edit
-   Project Officer (PO) : View & Add/Edit
-   Project Director (PD) : View & Add/Edit
-   Admin and Finance Assistant (AA) : View

### b. GEL Records
For each student enrolled in a **GEL course**, it is necessary to fill in the **EOL (End of Level) Test Score**. The input fields should match the course level the student is enrolled in, as listed in the **Student Records** menu.

The **GEL Records** menu can be accessed by users with the following roles:
-   Teachers : View & Edit
-   Education Officer (EO) : View & Edit
-   Project Officer (PO) : View
-   Project Director (PD) : View

### c. Student Attendance
The **Student Attendance** Menu will show **Generate Summary**, **Class Attendance Records** table, and **Report of Teaching Activity** table.

Teacher can fill **Attendance Record** (yellow button). If the button not show, ask PD to **create class** for the specific course (Go to **Manage Classes** menu). Teacher needs **Create Date Session** (max 4 session in a week, no overlapping session number in a week).
After create Session, teacher can record **‘Input/Update Attendance Session'** for specific session. Edit attendance for each students with option **Yes/No/Excuse**.

The **Student Attendance** menu can be accessed by users with the following roles:
-   Teachers : View, Add Session, Add/Edit Student Attendance
-   Project Assistant (PA) : View, Add Session, Add/Edit Student Attendance
-   Education Officer (EO) : View
-   Project Officer (PO) : View
-   Project Director (PD) : View
-   Admin and Finance Assistant (AA) : View

### d. Scholarships
This menu use for register UEP clients in scholarship. **Add Scholarship Recipient** will show to option **GED Exam** and **Higher Education**. Next, fill in the required fields.

The **Scholarships** menu can be accessed by users with the following roles:
-   Project Officer (PO) : View & Add/Edit
-   Project Director (PD) : View & Add/Edit
-   Admin and Finance Assistant (AA) : View

## 6. Volunteers
The **Volunteers** menu contains two tables: one for volunteers from **clients/community** and one for those **not from the community**. To add a volunteer, click the **Add Volunteer** button and fill in the required information.

For each volunteer already listed, a **time record** can be submitted by entering the following:
*   Stipend base
*   Time records (in hours)
*   Meetings
*   Hourly rate

The **Volunteers** menu can be accessed by users with the following roles:
-   Education Officer (EO) : View & Add/Edit
-   Project Officer (PO) : View & Add/Edit
-   Project Director (PD) : View & Add/Edit

The **Volunteer Time Record** menu can be accessed by users with the following roles:
-   Teachers : View & Add
-   Project Assistant (PA) : View & Add
-   Education Officer (EO) : View & Add
-   Project Officer (PO) : View & Add
-   Project Director (PD) : View & Add
-   Admin and Finance Assistant (AA) : View & Add

## 7. Activities
The **Activity** menu is used to record activities related to UEP. First, create a new activity by clicking the **‘Add Activity'** button.
Next, for each activity, you can:
*   Add Participants
*   Add Facilitators (from clients)
*   Add Facilitators from Staff

The **Activities** menu can be accessed by users with the following roles:
-   Project Assistant (PA) : View, Add/Edit
-   Education Officer (EO) : View, Add/Edit
-   Project Officer (PO) : View, Add/Edit
-   Project Director (PD) : View, Add/Edit, Delete

## 8. Finance
The **Finance** menu has 4 sections:
1.  Scholarships Allowance
2.  Volunteers Allowance
3.  Activity Allowance for Participant
4.  Activity Allowance for Facilitator

**The step for request allowance:**
1.  **Admin and Finance Assistant (AA) request allowance** to PD
2.  **PD Approve/Not Approve Request**
3.  If request approve, AA can **process payment**. If payment is paid, then AA can **print invoice**.

The **Finance** menu can be accessed by users with the following roles:
-   Project Director (PD) : **Add Approval**
-   Admin and Finance Assistant (AA) : **Add Request, Payment Process, Print Invoice**
