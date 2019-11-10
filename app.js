// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const loginTest = require('./login_test').loginTest
const users = require('./login_test').users
const FileStore = require('session-file-store')(session)
const identityKey = 'skey'
const app = express()
const port = 3000
let findUser = function (email, password) {
  return users.find(function (user) {
    return user.email === email && user.password === password
  })
}

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  // setting handlebars helpers and define ifEquals function
  helpers: {
    ifEquals: function (arg1, arg2, options) { return (arg1 == arg2) ? options.fn(this) : options.inverse(this) }
  }
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting session-file-store
app.use(session({
  name: identityKey,
  secret: 'secret', // 用來對session id相關的cookie進行簽名
  store: new FileStore(), // 本地儲存session（文字檔案，也可以選擇其他store，比如redis的）
  saveUninitialized: false, // 是否自動儲存未初始化的會話，建議false
  resave: false, // 是否每次都重新儲存會話，建議false
  cookie: {
    maxAge: 10 * 1000 // 有效期，單位是毫秒
  }
}))

// setting routes
// identify is logged in or not, remain logged in when getting '/'
app.get('/', function (req, res) {
  const sess = req.session
  const loginEmail = sess.loginEmail
  const loginUsername = sess.loginUsername
  const isLoggedIn = !!loginEmail
  if (isLoggedIn) {
    res.render('show', { username: loginUsername })
  }
  else {
    res.render('index')
  }
})

// log in
app.post('/login', function (req, res) {
  const input = req.body
  const email = req.body.email
  const password = req.body.password
  const user = findUser(email, password)
  const login = loginTest(input)

  if (login !== false) {
    req.session.regenerate(function (err) {
      if (err) {
        return res.json({ ret_code: 2, ret_msg: '登入失敗' })
      }
      req.session.loginEmail = user.email
      req.session.loginUsername = user.firstName
      console.log(req.session)
    })
    res.render('show', { username: login })
  }
  else {
    res.render('index', { loginStatus: login, email, password })
  }
})

// identify is logged in or not, remain logged in when getting '/logout'
app.get('/login', function (req, res) {
  const sess = req.session
  const loginEmail = sess.loginEmail
  const loginUsername = sess.loginUsername
  const isLoggedIn = !!loginEmail
  if (isLoggedIn) {
    res.render('show', { username: loginUsername })
  }
  else {
    res.render('index')
  }
})

// log out
app.get('/logout', function (req, res) {
  // 備註：這裡用的 session-file-store 在destroy 方法裡，並沒有銷燬cookie
  // 所以客戶端的 cookie 還是存在，導致的問題 --> 退出登陸後，服務端檢測到cookie
  // 然後去查詢對應的 session 檔案，報錯
  // session-file-store 本身的bug  
  req.session.destroy(function (err) {
    if (err) {
      res.json({ ret_code: 2, ret_msg: '退出登入失敗' })
      return
    }
    console.log(req)
    // req.session.loginUser = null
    res.clearCookie(identityKey)
    res.redirect('/')
    console.log(req.session)
  })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})