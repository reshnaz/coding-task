Requirements and implementation information:

1. Create a new angular app with the latest angular version

=> Application created with Angular version 12.

2. The app should have 2 routes/pages.

=> There are 3 routes: home, statistics and page-not-found.

3. First page should display a welcome text

=> Contains welcome text with button to navigate to Statistics page.

4. Second page should have an empty list of numbers and an input field (+ button) to add new numbers to the list. Additionally create an statistics box, where the current average, median and standard deviation of the current list is displayed

=> List accepts upto 5 entries for simplicity. The list can be cleared if needed. Statistical data based on list is displayed.

5. Write unit and e2e tests for this page

=> Contains basic unit tests with code coverage information.

6. Add translations to the app. The main language should be english with the option to change the language to a language of your choice (texts of that language can be dummies)

=> Used ngx-translate for this feature. Please refer to json files inside assets/i18n folder for translation texts. Translation implemented for English and German languages.

