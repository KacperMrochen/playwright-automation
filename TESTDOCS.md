# Trello Test Documentation

## 1. Scope of tests

- Auth – registration, logging in, logging out.
- Boards – create, edit, delete board.
- Lists – create, edit, delete list.
- Cards – create, edit, move between lists, delete card.
- Users and collaboration – assign members to card, change permissions.
- Filtering and searching – search by card name.

## 2. Test Cases

### Signup

#### Register new user

- ID: TC-SIGNUP-001
- Objective: Sign up new user.
- Test steps:
  1. Open sign up page.
  2. Enter new login.
  3. Click „Sign up” button.
- Expected result:
  1. User has registered new account.
  2. User is redirected to /welcome-to-trello page.

#### Incorrect sign up

- ID: TC-SIGNUP-001
- Objective: Check if you can create new account with the same email in the database.
- Test steps:
  1. Open log in page.
  2. Enter login and password.
  3. Click „Sign up” button.
- Test Data:
  - Login: "example@domain.com"
  - Password: "password"
- Expected result:
  1. Error message pop ups.
  2. User is redirected to /login page

### Login

#### Log in to Trello

- ID: TC-LOGIN-001
- Objective: Verify, that user can log in correctly with correct credentials.
- Preconditions: User has registered Trello account.
- Test steps:
  1. Open log in page.
  2. Enter correct login and password.
  3. Click „Log in” button.
- Expected result:
  1. User has access to his account.
  2. User is redirected to main boards page.

#### Incorrect login

- ID: TC-LOGIN-002
- Objective:
- Test steps:
  1. Open log in page.
  2. Enter in-correct login and password.
  3. Click „Log in” button.
- Test data:
  - Username: "exmaple@domain.com"
  - Password: "password"
- Expected result:
  1. Error message pop ups.

### Board

#### Create a new board

- ID: TC-BOARD-001
- Objective: Verify that a user can successfully create a new board.
- Preconditions:
  - The user is logged in.
  - The user is on the Trello home page (/u/[username]/boards).
- Test Steps:
  1. Click the "Create new board" button.
  2. Enter the board name into the text field.
  3. Select the board's visibility (e.g., Public, Team, Private).
  4. Click the "Create" button.
- Test Data:
  - Board Name: "Test Board - E2E"
  - Visibility: "Private"
- Expected Result:
  - A new board named "Test Board - E2E" is successfully created.
  - The user is redirected to the newly created board's page.
  - The board's title is visible and matches the provided name.

#### Archieve a board

- ID: TC-BOARD-002
- Objective: Verify that a user can archive a board.
- Preconditions:
  - The user is logged in.
  - At least one board is available for the user to archive.
- Test Steps:
  1. Navigate to the board page to be archived.
  2. Open the board menu (e.g., Show menu).
  3. Select the "Archive this board" option.
  4. Confirm the archiving action.
- Expected Result:
  - The board is no longer visible on the user's active boards list.
  - When navigating to the board's URL, it is clearly marked as archived.

### List

#### Add new list

- ID: TC-LIST-001
- Objective: Verify that a user can add a new list to an existing board.
- Preconditions:
  - The user is logged in.
  - At least one board is available to the user.
- Test Steps:
  1. Navigate to an existing board's page.
  2. Click the "Add another list" option.
  3. Enter the list name into the text field.
  4. Click the "Add list" button.
- Test Data:
  - List Name: "To Do"
- Expected result:
  - A new list named "To Do" is added to the board.
  - The list is visible and ready for cards to be added.

### Card

#### Create new card

- ID: TC-CARD-001
- Objective: Verify that a user can create a new card on a list.
- Preconditions:
  - The user is logged in.
  - There is at least one list on the board.
- Test Steps:
  1. Navigate to a board page with at least one list.
  2. Within the desired list, click the "Add a card" option.
  3. Enter the card title into the text field.
  4. Click the "Add card" button.
- Test Data:
  - Card Title: "Buy groceries"
- Expected result:
  - A new card with the title "Buy groceries" is added to the list.
  - The card is visible on the list.
  - Move a card to another list

#### Move card to other list

- ID: TC-CARD-002
- Objective: Verify that a user can move a card between lists using drag-and-drop.
- Preconditions:
  - The user is logged in.
  - The board contains at least two lists and one card.
- Test Steps:
  1. Navigate to the board page with at least two lists and a card.
  2. Locate the card to be moved.
  3. Drag the card from its source list and drop it onto the destination list.
- Test Data:
  - Card: "Buy groceries"
  - Source List: "To Do"
  - Destination List: "In Progress"
- Expected result:
  - The "Buy groceries" card is no longer visible on the "To Do" list.
  - The "Buy groceries" card is now visible on the "In Progress" list.
