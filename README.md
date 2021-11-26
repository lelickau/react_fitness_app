##### Client: React | Redux | Axios
##### Server: NodeJS | Express | Mongoose
##### Data base: [MongoDB](https://account.mongodb.com)

### Food macronutrients calculator and Notes list

---
### Deployed
##### Site: [MERN CheckYFood](https://mern-fit-app.herokuapp.com/autorization)
##### Test account:
email: testadmin@test.com
password: 123456

(Or you can create your own account)

---

##### Expend App locally:
1. In the root folder (react_foods_mern_app-main):
    - **npm i**
    - Rename the folder **"config.example"** => **"config"**
2. In the **"client"** folder:
    - **npm i**
    - Rename the file **"env.example.js"** => **"env.js"**
3. Run through the terminal in the root folder (react_foods_mern_app-main):
    - **npm run dev**

---


##### Application tree:
```
_**server**_
--| **config.example**
----|default.json
--| **controllers**
----|auth-controller.js
----|food-controller.js
----|notes-controller.js
--| **dtos**
----|user-dto.js (decomposition of data User from the DataBase)
--| **exeptions**
----|api-error.js (error 'handling')
--| **middleware**
----|auth-middleware.js
----|error-middleware.js
--| **models**
----|File.js
----|Food.js
----|Note.js
----|Token.js
----|User.js
--| **routes**
----|index.js
--| **service**
----|food-service.js
----|mail-service.js
----|notes-service.js
----|token-service.js
----|user-service.js
--| app.js

_**client**_
--| **public**
----| favicon.ico
----| index.html
----| manifest.json
--| **src**
----| **components**
------| **createMyFoodItem**
--------| CreateMyFoodItem.jsx
--------| createMyFoodItem.scss
------| **createNote**
--------| CreateNote.jsx
--------| createNote.scss
------| **foodItem**
--------| FoodItem.jsx
--------| foodItem.scss
------| **headerTitle**
--------| HeaderTitle.jsx
--------| headerTitle.scss
------| **loader**
--------| Loader.jsx
--------| loader.scss
--------| LocalLoader.jsx
--------| localloader.scss
------| **myFoodItem**
--------| MyFoodItem.jsx
--------| myFoodItem.scss
------| **myFoodList**
--------| MyFoodList.jsx
--------| myFoodList.scss
------| **notes**
--------| Notes.jsx
--------| notes.scss
------| **searchFood**
--------| SearchFood.jsx
--------| searchFood.scss
------| **sidebar**
--------| Sidebar.jsx
--------| sidebar.scss
------| **taskItem**
--------| TaskItem.jsx
--------| taskItem.scss
------| **UI**
--------| **buttons**
----------| ButtonItem.jsx
----------| buttonItem.scss
--------| **elems**
----------| NutrientItem.jsx
----------| PlusMinuseElem.jsx
----------| elems.scss
--------| **inputs**
----------| InputItem.jsx
----------| TextareaItem.jsx
----------| inputItem.scss
----| **http**
------| index.js (interceptors axios)
----| **pages**
------| **authPage**
--------| AuthPage.jsx
--------| authPage.scss
------| **foodPage**
--------| FoodPage.jsx
--------| foodPage.scss
------| **homePage**
--------| HomePage.jsx
--------| homePage.scss
------| **notesPage**
--------| NotesPage.jsx
--------| notesPage.scss
------| **recoverPasswordPage**
--------| RecoverPage.jsx
--------| RecoverPassword.jsx
--------| recoverPassword.scss
----| **redux**
------| **actions**
--------| foods.js
--------| global.js
--------| notes.js
--------| user.js
------| **reducers**
--------| foodsReducer.js
--------| globalReducer.js
--------| notesReducer.js
--------| userReducer.js
--------| index.js (combineReducers,createStore)
--------| initializeReducer.js (verification of an authorized)
----| **resources**
------| icons
------| img
----| **services**
------| AuthServices.js
----| **styles**
------| scroll.scss
------| style.scss
------| variables.scss
----| App.js
----| env.example.js
----| index.js
----| routes.js
```


