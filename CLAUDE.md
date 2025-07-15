This document outlines our collaborative plan to create the documentation for the JRS Thailand web application. We will use this file as our single source of truth. The core of this plan is to first define user journeys, capture them, and then generate the documentation content.

## 1. Project Overview

*   **Objective:** To create a clear, user-friendly documentation website using Astro Starlight, focusing on the user journey and data flow within the application.
*   **Technology & Workflow:**
    *   **Framework:** Astro Starlight (pre-installed).
    *   **Screenshot Automation:** Puppeteer with `puppeteer-mcp` to capture specific UI elements during a scripted user journey. Use wider dimension for puppeteer browser window since side menu is hidden in smaller dimensions.
Visit jrsthailand.org and login with yethi.hahtwe@jrs.net and the password is the same email.
    *   **Content Generation:** You will generate the documentation text (`.mdx` files) based on the user journeys and the screenshots created.
    *   **Hosting:** Deployed to Vercel.

## Documentation Style Guidelines

### List Headings
- Use hyphens (-) instead of colons (:) in list headings
- Example: **Export and Control Options -** (correct)
- Example: **Export and Control Options:** (incorrect)

### Content Guidelines
- Avoid adding concluding paragraphs that summarize benefits or business value
- Focus on functional descriptions and practical usage
- Don't include paragraphs like "This feature ensures..." or "This provides..."
- Keep content concise and action-oriented

This ensures consistent formatting across all documentation pages.

## 2. UEP Documentation Plan

### Overview
Urban Education Project (UEP) documentation using role-based landing pages with shared feature documentation to avoid content duplication while providing role-specific navigation.

### UEP Site Access
- **URL:** https://uep.jrsthailand.org/
- **Login:** yethi.hahtwe@jrs.net (password same as email)
- **Browser:** Use wider dimensions for screenshots (side menu hidden in smaller dimensions)

### Documentation Structure: Option 1 - Role Landing Pages + Shared Feature Pages

#### File Structure
```
src/content/docs/uep/
├── getting-started.mdx              # Universal login/setup
├── roles/
│   ├── teachers.mdx                 # Teacher role landing page
│   ├── project-assistant.mdx        # PA role landing page  
│   ├── education-officer.mdx        # EO role landing page
│   ├── project-officer.mdx          # PO role landing page
│   ├── project-director.mdx         # PD role landing page
│   └── admin-finance.mdx            # AA role landing page
├── menus/
│   ├── register-inquiry.mdx         # Single source feature docs
│   ├── admissions.mdx
│   ├── students.mdx
│   ├── volunteers.mdx
│   ├── activities.mdx
│   └── finance.mdx
└── workflows/
    ├── semester-setup.mdx           # Cross-menu workflows
    └── allowance-process.mdx
```

#### Role Landing Page Content
Each role page includes:
1. **Role Overview** - Brief description of responsibilities
2. **Quick Access Dashboard** - Visual grid of available features
3. **Permission Summary** - What you can/cannot do
4. **Common Workflows** - Step-by-step processes for this role
5. **Quick Links** - Direct links to relevant sections in feature pages

#### Feature Page Content
Each feature page contains:
1. **Overview** - What this menu does
2. **Access Requirements** - Role permission matrix
3. **Feature Sections** - Detailed functionality (single source)
4. **Role-Specific Callouts** - Highlighted permissions/restrictions

#### Role Permission Matrix
Based on consultant guide:

| Role | Register/Inquiry | Admissions | Student Records | GEL Records | Attendance | Scholarships | Volunteers | Activities | Finance |
|------|------------------|------------|-----------------|-------------|------------|--------------|------------|------------|---------|
| **Teachers** | - | - | View | View & Edit | View, Add Session, Edit | - | Time Record (View & Add) | - | - |
| **PA** | View & Add/Edit | View & Add/Edit | View | - | View, Add Session, Edit | - | Time Record (View & Add) | View & Add/Edit | - |
| **EO** | View & Add/Edit | View & Add/Edit | View & Add/Edit | View & Edit | View | - | View & Add/Edit, Time Record | View & Add/Edit | - |
| **PO** | View & Add/Edit | View & Add/Edit | View & Add/Edit | View | View | View & Add/Edit | View & Add/Edit, Time Record | View & Add/Edit | - |
| **PD** | View, Add/Edit, Delete | View, Add/Edit, Delete | View & Add/Edit | View | View | View & Add/Edit | View & Add/Edit, Time Record | View, Add/Edit, Delete | Approve |
| **AA** | View & Add/Edit | - | View | - | View | View | Time Record (View & Add) | - | Request, Process, Invoice |

#### Benefits
- **Single Source of Truth** - Feature docs maintained in one place
- **Role-Specific Entry Points** - Users find relevant info quickly
- **Cross-Reference Links** - Deep linking to specific sections
- **Maintenance Efficiency** - Update once, reference everywhere
- **Scalable** - Easy to add new roles or features

### UEP Getting Started Page Plan

#### Page Structure
1. **Login Section**
   - Navigate to uep.jrsthailand.org 
   - Login form walkthrough with screenshots
   - Credential entry process

2. **Role-Based Dashboard Overview**
   - Brief explanation of RBAC (Role-Based Access Control)
   - Dashboard varies by user role
   - Screenshot of main dashboard after login

3. **User Roles Overview** 
   - List all 7 roles: Superadmin, Teachers, PA, EO, PO, PD, AA
   - Brief description of each role's purpose
   - Link to detailed role-specific pages

4. **Password Reset Process**
   - Access profile menu (top right username)
   - Navigate to "Profile & Change Password" 
   - Step-by-step password update process
   - Screenshots showing the flow

5. **Navigation Introduction**
   - Sidebar menu overview
   - Explanation that menu options vary by role
   - Brief introduction to main sections

6. **Next Steps Section**
   - Links to role-specific landing pages
   - "Find your role" guidance
   - Links to common workflows

#### Key Differences from URP Getting Started
- **RBAC emphasis** - UEP's role system is more complex
- **Role selection guidance** - Help users identify their role
- **Role-specific next steps** - Direct users to their relevant documentation

#### Screenshots Needed
1. UEP login page
2. Dashboard (role-specific view)
3. Profile menu access
4. Password change form
5. Sidebar navigation overview

### Teachers Role Landing Page Plan

#### Page Structure
1. **Role Overview**
   - Brief description: "Teachers manage student attendance, GEL test scores, and volunteer time records"
   - Key responsibilities in the UEP system

2. **What You Can Access**
   - **Student Attendance** - View, Add Sessions, Edit Attendance
   - **GEL Records** - View & Edit EOL Test Scores  
   - **Volunteer Time Record** - View & Add Records
   - **Student Records** - View Only

3. **Your Common Workflows**
   - Taking Daily Attendance (step-by-step)
   - Recording GEL Test Scores
   - Submitting Volunteer Hours
   - Viewing Student Information

4. **Limitations & Notes**
   - Clear callout of what teachers cannot do (registrations, admissions, etc.)
   - Contact information for other roles when needed

#### Key Focus
- **Task-oriented** rather than feature-oriented
- **Workflow-driven** content organization
- **Visual quick access** to reduce navigation time

### Project Assistant (PA) Role Landing Page Plan

#### Page Structure
1. **Role Overview**
   - Brief description: "Project Assistants handle client intake, admissions processing, student attendance, and activity coordination"
   - Key responsibilities in the UEP system

2. **What You Can Access**
   - **Register & Inquiry** - View & Add/Edit client information
   - **Admissions** - View & Add/Edit applicant processing
   - **Student Records** - View only
   - **Student Attendance** - View, Add Sessions, Edit Attendance  
   - **Volunteer Time Record** - View & Add Records
   - **Activities** - View, Add/Edit events and participants

3. **Your Common Workflows**
   - Client Registration and Inquiry Process
   - Processing New Admissions
   - Managing Student Attendance Sessions
   - Coordinating Activities and Events
   - Recording Volunteer Time

4. **Limitations & Notes**
   - Cannot edit student records or GEL scores
   - Cannot access scholarships or finance functions
   - Contact EO/PO for advanced student management

### Education Officer (EO) Role Landing Page Plan

#### Page Structure
1. **Role Overview**
   - Brief description: "Education Officers manage student records, GEL assessments, volunteer coordination, and educational activities"
   - Key responsibilities in the UEP system

2. **What You Can Access**
   - **Register & Inquiry** - View & Add/Edit client information
   - **Admissions** - View & Add/Edit applicant processing
   - **Student Records** - View & Add/Edit student information and enrollment
   - **GEL Records** - View & Edit EOL Test Scores
   - **Student Attendance** - View only
   - **Volunteers** - View & Add/Edit volunteer management
   - **Volunteer Time Record** - View & Add Records
   - **Activities** - View, Add/Edit events and participants

3. **Your Common Workflows**
   - Managing Student Enrollment and Records
   - Recording and Updating GEL Test Scores
   - Coordinating Volunteer Programs
   - Educational Activity Planning
   - Student Assessment and Progression

4. **Limitations & Notes**
   - Cannot manage scholarships (contact PO/PD)
   - Cannot process finance/allowances (contact AA/PD)
   - Limited attendance management (contact PA for session creation)

### Project Officer (PO) Role Landing Page Plan

#### Page Structure
1. **Role Overview**
   - Brief description: "Project Officers oversee scholarships, volunteer programs, and have comprehensive access to student and activity management"
   - Key responsibilities in the UEP system

2. **What You Can Access**
   - **Register & Inquiry** - View & Add/Edit client information
   - **Admissions** - View & Add/Edit applicant processing
   - **Student Records** - View & Add/Edit student information and enrollment
   - **GEL Records** - View only
   - **Student Attendance** - View only
   - **Scholarships** - View & Add/Edit scholarship programs (GED Exam, Higher Education)
   - **Volunteers** - View & Add/Edit volunteer management
   - **Volunteer Time Record** - View & Add Records
   - **Activities** - View, Add/Edit events and participants

3. **Your Common Workflows**
   - Managing Scholarship Programs
   - Overseeing Volunteer Coordination
   - Student Program Oversight
   - Activity and Event Management
   - Client Intake Supervision

4. **Limitations & Notes**
   - Cannot process finance/allowances (contact AA/PD for payments)
   - Cannot delete records (contact PD for deletions)
   - Limited GEL and attendance editing (contact EO/PA for hands-on management)

### Project Director (PD) Role Landing Page Plan

#### Page Structure
1. **Role Overview**
   - Brief description: "Project Directors have full system access with delete permissions, exclusive access to reports, and finance approval authority"
   - Key responsibilities in the UEP system

2. **What You Can Access**
   - **Register & Inquiry** - View, Add/Edit, Delete client information
   - **Admissions** - View, Add/Edit, Delete applicant processing
   - **Student Records** - View & Add/Edit student information and enrollment
   - **GEL Records** - View only
   - **Student Attendance** - View only
   - **Scholarships** - View & Add/Edit scholarship programs
   - **Volunteers** - View & Add/Edit volunteer management
   - **Volunteer Time Record** - View & Add Records
   - **Activities** - View, Add/Edit, Delete events and participants
   - **Finance** - Approve allowance requests
   - **Reports** - Exclusive access to all system reports

3. **Your Common Workflows**
   - Initial Semester Setup (users, courses, classes)
   - Finance Approval and Authorization
   - System Reports and Analytics
   - Strategic Program Oversight
   - Data Management and Deletion Authority

4. **Unique Responsibilities**
   - Only role with delete permissions across most modules
   - Exclusive access to Reports section
   - Finance approval authority for allowance requests
   - System administration and semester setup

### Admin & Finance Assistant (AA) Role Landing Page Plan

#### Page Structure
1. **Role Overview**
   - Brief description: "Admin & Finance Assistants handle client intake, finance processing, and allowance management with limited system access"
   - Key responsibilities in the UEP system

2. **What You Can Access**
   - **Register & Inquiry** - View & Add/Edit client information
   - **Student Records** - View only
   - **Student Attendance** - View only
   - **Scholarships** - View only
   - **Volunteer Time Record** - View & Add Records
   - **Finance** - Request allowances, Process payments, Print invoices

3. **Your Common Workflows**
   - Client Registration and Data Entry
   - Allowance Request Processing
   - Payment Processing and Settlement
   - Invoice Generation and Printing
   - Financial Record Management

4. **Finance Workflow Process**
   - Step 1: Request allowance to PD
   - Step 2: Wait for PD approval/rejection
   - Step 3: Process payment (if approved)
   - Step 4: Print invoice (after payment completion)

5. **Limitations & Notes**
   - Cannot edit student records or manage courses
   - Cannot manage volunteers, activities, or scholarships
   - Cannot approve finance requests (requires PD approval)
   - Limited to finance processing and basic client management

### Register & Inquiry Menu Feature Page Plan

#### Page Structure
1. **Overview**
   - What the Register & Inquiry menu does (client registration and inquiry recording)
   - Location in sidebar navigation
   - Prerequisite: clients must be registered before inquiry

2. **Access Requirements (Role Permission Matrix)**
   | Role | Register | Inquiry |
   |------|----------|---------|
   | Teachers | - | - |
   | PA | View & Add/Edit | View & Add/Edit |
   | EO | View & Add/Edit | View & Add/Edit |
   | PO | View & Add/Edit | View & Add/Edit |
   | PD | View, Add/Edit, Delete | View, Add/Edit, Delete |
   | AA | View & Add/Edit | View & Add/Edit |

3. **Register Client Section**
   - Client search and duplicate checking process
   - New client registration workflow
   - Required fields and data entry
   - URPID generation and management

4. **Inquiry Recording Section**
   - Recording client inquiries after registration
   - Inquiry types and categorization
   - Follow-up tracking and notes

5. **Data Management Features**
   - Search and filtering capabilities
   - Export options (PDF, Excel, CSV)
   - Client data updates and maintenance

### Admissions Menu Feature Page Plan

#### Page Structure
1. **Overview**
   - What the Admissions menu does (applicant processing from admission to student activation)
   - Location in sidebar navigation
   - Prerequisite: client must be registered before admission

2. **Access Requirements (Role Permission Matrix)**
   | Role | Add Applicant | Input Interview Score | Process Applications |
   |------|---------------|----------------------|---------------------|
   | Teachers | - | - | - |
   | PA | View & Add/Edit | View & Add/Edit | View & Add/Edit |
   | EO | View & Add/Edit | View & Add/Edit | View & Add/Edit |
   | PO | View & Add/Edit | View & Add/Edit | View & Add/Edit |
   | PD | View, Add/Edit, Delete | View, Add/Edit, Delete | View, Add/Edit, Delete |
   | AA | - | - | - |

3. **Add Applicant Section**
   - Selecting registered clients for admission
   - Course selection and assignment
   - Interview scheduling process
   - Application data entry requirements

4. **Input Interview Score Section**
   - Interview scoring workflow
   - Score entry and editing capabilities
   - Pass/fail determination criteria
   - Automatic progression to Student Records

5. **Application Management**
   - Application status tracking
   - Interview scheduling and management
   - Applicant communication and follow-up
   - Data export and reporting features

### Students Menu Feature Page Plan

#### Page Structure
1. **Overview**
   - What the Students menu does (student records, GEL, attendance, scholarships)
   - Location in sidebar navigation
   - Four main sections: Student Records, GEL Records, Student Attendance, Scholarships

2. **Access Requirements (Role Permission Matrix)**
   | Role | Student Records | GEL Records | Attendance | Scholarships |
   |------|-----------------|-------------|------------|--------------|
   | Teachers | View | View & Edit | View, Add Session, Edit | - |
   | PA | View | - | View, Add Session, Edit | - |
   | EO | View & Add/Edit | View & Edit | View | - |
   | PO | View & Add/Edit | View | View | View & Add/Edit |
   | PD | View & Add/Edit | View | View | View & Add/Edit |
   | AA | View | - | View | View |

3. **Student Records Section**
   - Active and non-active student tables
   - Student activation process (green button)
   - Student enrollment data entry
   - Status changes (Active, Decline, Failed, Passed, Withdrawn)

4. **GEL Records Section**
   - EOL (End of Level) Test Score entry
   - Course level matching requirements
   - GEL course enrollment tracking
   - Score management and updates

5. **Student Attendance Section**
   - Generate Summary overview
   - Class Attendance Records table
   - Create Date Session (max 4 per week)
   - Input/Update Attendance Session
   - Attendance options (Yes/No/Excuse)

6. **Scholarships Section**
   - GED Exam scholarships
   - Higher Education scholarships
   - Scholarship recipient registration
   - Required field completion

### Volunteers Menu Feature Page Plan

#### Page Structure
1. **Overview**
   - What the Volunteers menu does (volunteer management and time tracking)
   - Location in sidebar navigation
   - Two main sections: Volunteer Management and Volunteer Time Records

2. **Access Requirements (Role Permission Matrix)**
   | Role | Volunteer Management | Volunteer Time Record |
   |------|---------------------|----------------------|
   | Teachers | - | View & Add |
   | PA | - | View & Add |
   | EO | View & Add/Edit | View & Add |
   | PO | View & Add/Edit | View & Add |
   | PD | View & Add/Edit | View & Add |
   | AA | - | View & Add |

3. **Volunteer Management Section**
   - Two volunteer categories: from clients/community and not from community
   - Add Volunteer button and registration process
   - Volunteer information management
   - Status tracking and updates

4. **Volunteer Time Record Section**
   - Time record submission for volunteers
   - Required fields: Stipend base, Time records (hours), Meetings, Hourly rate
   - Record management and tracking
   - Payment calculation and processing

5. **Data Management Features**
   - Search and filtering capabilities
   - Export options for volunteer data
   - Time record reporting and summaries
   - Volunteer activity tracking

### Activities Menu Feature Page Plan

#### Page Structure
1. **Overview**
   - What the Activities menu does (activity management, participants, and facilitators)
   - Location in sidebar navigation
   - Three main components: Activity creation, Participant management, Facilitator coordination

2. **Access Requirements (Role Permission Matrix)**
   | Role | Activities | Add Participants | Add Facilitators | Delete Activities |
   |------|------------|------------------|------------------|-------------------|
   | Teachers | - | - | - | - |
   | PA | View & Add/Edit | View & Add/Edit | View & Add/Edit | - |
   | EO | View & Add/Edit | View & Add/Edit | View & Add/Edit | - |
   | PO | View & Add/Edit | View & Add/Edit | View & Add/Edit | - |
   | PD | View & Add/Edit | View & Add/Edit | View & Add/Edit | Delete |
   | AA | - | - | - | - |

3. **Activity Management Section**
   - Add Activity button and creation process
   - Activity details and scheduling
   - Activity status and tracking
   - Event coordination and planning

4. **Participant Management Section**
   - Adding participants to activities
   - Participant tracking and attendance
   - Registration and enrollment processes
   - Participant communication and follow-up

5. **Facilitator Coordination Section**
   - Add Facilitators (from clients/community)
   - Add Facilitators from Staff
   - Facilitator assignment and scheduling
   - Role coordination and management

6. **Data Management Features**
   - Activity reporting and analytics
   - Export options for activity data
   - Participant and facilitator summaries
   - Event documentation and records

### Finance Menu Feature Page Plan

#### Page Structure
1. **Overview**
   - What the Finance menu does (allowance management and approval workflow)
   - Location in sidebar navigation
   - Four allowance types: Scholarships, Volunteers, Activity Participants, Activity Facilitators

2. **Access Requirements (Role Permission Matrix)**
   | Role | Request Allowance | Approve Request | Process Payment | Print Invoice |
   |------|-------------------|-----------------|-----------------|---------------|
   | Teachers | - | - | - | - |
   | PA | - | - | - | - |
   | EO | - | - | - | - |
   | PO | - | - | - | - |
   | PD | - | Add Approval | - | - |
   | AA | Add Request | - | Payment Process | Print Invoice |

3. **Finance Workflow Process**
   - Step 1: AA requests allowance to PD
   - Step 2: PD approves or rejects request
   - Step 3: AA processes payment (if approved)
   - Step 4: AA prints invoice (after payment completion)

4. **Allowance Types**
   - **Scholarships Allowance** - Educational funding requests
   - **Volunteers Allowance** - Volunteer stipend processing  
   - **Activity Allowance for Participants** - Event participation funding
   - **Activity Allowance for Facilitators** - Facilitator compensation

5. **Request Management**
   - Allowance request creation and submission
   - Request tracking and status updates
   - Documentation and supporting materials
   - Communication between AA and PD

6. **Payment Processing**
   - Payment approval workflow
   - Payment processing and settlement
   - Invoice generation and printing
   - Financial record keeping and audit trails

### Semester Setup Workflow Page Plan

#### Page Structure
1. **Overview**
   - What semester setup involves (initial configuration for each semester)
   - Who performs this: Project Director (PD) exclusively
   - When this is done: Beginning of each semester

2. **Prerequisites**
   - System access as Project Director
   - Planning materials (staff list, course schedules, teacher assignments)
   - Previous semester completion and cleanup

3. **Step-by-Step Workflow**

   **Step 1: Manage Users**
   - Create new user accounts for staff members
   - Assign appropriate roles (Teachers, PA, EO, PO, AA)
   - Update existing user statuses (Active/Resign)
   - Create volunteer teacher accounts

   **Step 2: Manage Courses**
   - Create courses for the upcoming semester
   - Set course status to Active
   - Ensure no schedule overlaps or conflicts
   - Define course levels and requirements

   **Step 3: Manage Classes**
   - Assign teachers to each active course
   - Create multiple classes for same-level courses (A, B, C coding)
   - Set class codes and identifiers
   - Establish class schedules and capacity

4. **Best Practices**
   - Complete user setup before course creation
   - Verify teacher availability before assignments
   - Double-check schedule conflicts
   - Document changes for audit purposes

5. **Troubleshooting**
   - Common setup issues and solutions
   - User role assignment problems
   - Course scheduling conflicts
   - Teacher assignment difficulties

### Allowance Process Workflow Page Plan

#### Page Structure
1. **Overview**
   - What the allowance process involves (complete financial workflow from request to payment)
   - Who's involved: Admin & Finance Assistant (AA) and Project Director (PD)
   - When this is used: For all allowance types across the system

2. **Prerequisites**
   - Completed activities/volunteers/scholarships that require payment
   - AA access to Finance menu
   - PD approval authority
   - Supporting documentation ready

3. **Step-by-Step Workflow**

   **Step 1: AA Request Allowance**
   - Navigate to Finance menu
   - Select allowance type (Scholarships, Volunteers, Activity Participants, Activity Facilitators)
   - Complete request form with required details
   - Attach supporting documentation
   - Submit request to PD

   **Step 2: PD Approval Process**
   - Review allowance request details
   - Verify supporting documentation
   - Check budget availability
   - Approve or reject request with notes
   - System notification to AA

   **Step 3: AA Payment Processing**
   - Access approved requests
   - Process payment through system
   - Generate payment records
   - Update payment status
   - Prepare for invoice generation

   **Step 4: Invoice Generation**
   - Print official invoice
   - File payment documentation
   - Update financial records
   - Complete audit trail

4. **Allowance Types Detail**
   - **Scholarships** - Educational funding workflow
   - **Volunteers** - Stipend processing steps
   - **Activity Participants** - Event funding process
   - **Activity Facilitators** - Facilitator compensation workflow

5. **Best Practices**
   - Complete documentation before requesting
   - Clear communication between AA and PD
   - Timely processing to avoid delays
   - Proper record keeping for audits

6. **Troubleshooting**
   - Request rejection handling
   - Payment processing errors
   - Documentation issues
   - System workflow problems

## 3. UEP Screenshot Requirements List

### Getting Started Page (5 screenshots)
1. UEP login page - Login form with URL visible
2. Dashboard after login - Main dashboard showing role-based menu
3. Profile menu access - Top right username dropdown menu
4. Password change form - Profile & Change Password interface
5. Sidebar navigation overview - Full sidebar menu showing available options

### Role Landing Pages (30 screenshots)

#### Teachers Role (5 screenshots)
1. Teacher dashboard - Dashboard view for teacher role
2. Student attendance interface - Attendance taking screen
3. GEL records interface - EOL test score entry form
4. Volunteer time record form - Time record submission interface
5. Student records view - Read-only student information display

#### Project Assistant (5 screenshots)
1. PA dashboard - Dashboard view for PA role
2. Register client interface - Client registration form
3. Admissions processing screen - Applicant management interface
4. Attendance session creation - Create new attendance session
5. Activities management - Activity creation and management interface

#### Education Officer (5 screenshots)
1. EO dashboard - Dashboard view for EO role
2. Student records editing - Full student record management interface
3. GEL records management - EOL test score editing capabilities
4. Volunteer management - Volunteer coordination interface
5. Activity planning screen - Educational activity creation

#### Project Officer (5 screenshots)
1. PO dashboard - Dashboard view for PO role
2. Scholarships management - GED and Higher Education scholarship interface
3. Volunteer program oversight - Comprehensive volunteer management
4. Student program overview - Student management dashboard
5. Activity oversight - Activity management and coordination

#### Project Director (5 screenshots)
1. PD dashboard - Dashboard view for PD role showing all access
2. Reports section - Exclusive reports interface
3. Finance approval interface - Allowance request approval screen
4. Delete confirmation dialogs - Examples of delete permissions
5. Semester setup interface - User, course, and class management

#### Admin & Finance Assistant (5 screenshots)
1. AA dashboard - Limited dashboard view for AA role
2. Finance menu overview - Complete finance interface
3. Allowance request form - Request creation interface
4. Payment processing screen - Payment settlement interface
5. Invoice generation - Invoice printing interface

### Menu Feature Pages (30 screenshots)

#### Register & Inquiry Menu (5 screenshots)
1. Register client search - Client duplicate checking interface
2. New client registration - Client registration form
3. URPID generation - URPID display and management
4. Inquiry recording - Inquiry entry and categorization
5. Export options - PDF, Excel, CSV export interface

#### Admissions Menu (5 screenshots)
1. Add applicant selection - Registered client selection for admission
2. Course selection - Course assignment interface
3. Interview scheduling - Interview management system
4. Interview score entry - Score input interface
5. Application status tracking - Application management dashboard

#### Students Menu (8 screenshots)
1. Student records table - Active and non-active student tables
2. Student activation - Green button activation process
3. GEL records interface - EOL test score management
4. Attendance summary - Generate summary overview
5. Class attendance records - Attendance tracking table
6. Create date session - Session creation interface (max 4 per week)
7. Attendance input - Yes/No/Excuse attendance options
8. Scholarships interface - GED and Higher Education scholarship management

#### Volunteers Menu (5 screenshots)
1. Volunteer management table - Volunteer overview interface
2. Add volunteer form - Volunteer registration (from clients/community)
3. Volunteer time record - Time submission interface
4. Stipend calculation - Hourly rate and payment calculation
5. Volunteer export options - Data export capabilities

#### Activities Menu (5 screenshots)
1. Activities overview - Activity management dashboard
2. Add activity form - Activity creation interface
3. Participant management - Add participants interface
4. Facilitator coordination - Add facilitators (clients/community and staff)
5. Activity export options - Activity data export features

#### Finance Menu (6 screenshots)
1. Finance dashboard - Complete finance menu overview
2. Allowance request types - Four allowance categories display
3. Request creation form - AA allowance request interface
4. PD approval interface - Approval/rejection workflow
5. Payment processing - Payment settlement interface
6. Invoice printing - Invoice generation and printing

### Workflow Pages (10 screenshots)

#### Semester Setup Workflow (5 screenshots)
1. User management - Create/manage staff accounts
2. Role assignment - Assign roles (Teachers, PA, EO, PO, AA)
3. Course creation - Create courses for semester
4. Class assignment - Assign teachers to courses
5. Schedule management - Class codes and scheduling interface

#### Allowance Process Workflow (5 screenshots)
1. AA request workflow - Step-by-step request creation
2. PD approval workflow - Review and approval process
3. Payment processing steps - Complete payment workflow
4. Invoice generation flow - Invoice printing and documentation
5. Status tracking - Request status and communication interface

**Total: 75 screenshots across 15 pages**
