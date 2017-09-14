const pug = require('pug')
const fs = require('fs')
const path = require('path')
const request = require('request')
const async = require('async')
const getUrl = require('./src/get-url')

async.parallel([
  (done) => {
    async.waterfall([
      (cb) => {
        request.get({
          url: getUrl({section: 'uk-news', page: 1}),
          json: true
        }, (err, res, body) => {
          cb(err, body)
        })
      },
      ({response}, cb) => {
        const indexPug = pug.compileFile(path.join(__dirname, 'src', 'index.pug'))
        fs.writeFile(path.join(__dirname, 'dist', 'index.html'), indexPug({results: response.results}), cb)
      }
    ], done)
  },
  (done) => {
    const newsItemsTpl = pug.compileFileClient(path.join(__dirname, 'src', 'news-items-tpl.pug'), {name: 'newsItemsTpl'})
    fs.writeFile(path.join(__dirname, 'dist', 'templates.js'), newsItemsTpl, done)
  },
  (done) => {
    async.waterfall([
      (cb) => {
        request.get({
          url: 'https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css'
        }, (err, res, body) => {
          cb(err, body)
        })
      },
      (tachyons, cb) => {
        fs.readFile(path.join(__dirname, 'src', 'main.css'), (err, css) => {
          cb(err, css, tachyons)
        })
      },
      (css, tachyons, cb) => {
        fs.writeFile(path.join(__dirname, 'dist', 'style.css'), tachyons += css, cb)
      }
    ], done)
  }
], (err) => {
  if (err) throw new Error(err)
  console.log('Build sucessful')
})
