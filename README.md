# 登入功能 - 儲存「登入狀態」 (Account Login with Saving Login Status Feature)

使用 Node.js + Express 打造的登入功能，可使用測試帳號測試登入功能，並能儲存登入狀態。

## 環境建置與需求 (Prerequisites)

* [Node.js](https://nodejs.org/)
* [Express ^4.17.1](https://expressjs.com)
* [Express-Handlebars ^3.1.0](https://www.npmjs.com/package/express-handlebars)
* [Body-Parser ^1.19.0](https://www.npmjs.com/package/body-parser)
* [Express-session ^1.17.0](https://github.com/expressjs/session)
* [Session-File-Store ^1.3.1](https://www.npmjs.com/package/session-file-store)

## 安裝與執行步驟 (Installing and execution)

1.開啟終端機(Terminal)，clone到本機專案位置:

```
git clone https://github.com/bluesmy/account_login_save_login_status.git
```

2.切換至專案資料夾

```
cd account_login_save_login_status
```

3.安裝套件
```
npm install  //自動安裝package.json內套件
```

4.啟動伺服器，並執行專案

```
npm run dev
```

終端顯示 `Express is listening on http://localhost:3000` 即成功啟動伺服器

```
Ctrl + C *2  //連按兩下Ctrl + C關閉伺服器
```

## 功能描述 (Features)

- 讓使用者輸入帳號及密碼
- 如果帳號或密碼輸入錯誤，介面會顯示 "Username/Password 錯誤"
- 如果帳號及密碼輸入正確，會導向使用者的 welcome page，並顯示登出按鈕
- 成功登入後，如果於cookie未到期前沒有按登出按鈕，則持續導向使用者的 welcome page
- 點選登出後，導向原始首頁

## 測試帳號＆密碼 (Test Accounts & Passwords)

| First Name | Email               | Password         |
| ---------- | ------------------- | ---------------- |
| Tony       | tony@stark.com      | iamironman       |
| Steve      | captain@hotmail.com | icandothisallday |
| Peter      | peter@parker.com    | enajyram         |
| Natasha    | natasha@gamil.com   | *parol#@$!       |
| Nick       | nick@shield.com     | password         |

## 專案使用工具 (Built With)

* [Visual Studio Code](https://code.visualstudio.com/) - The integrated development environment used
* [Express](https://expressjs.com) - The web framework used
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - The template engine used
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before handlers
* [Express-session](https://github.com/expressjs/session) - Create a session middleware with the given options
* [Session-File-Store](https://www.npmjs.com/package/session-file-store) - A provision for storing session data in the session file

## 專案開發人員 (Contributor)

* **Sheri Su** - [bluesmy](https://github.com/bluesmy)
