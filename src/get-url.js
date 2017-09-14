const qs = require('querystring')

module.exports = function ({section, page}) {
  const query = {
    section,
    page,
    'page-size': 7,
    'api-key': '9wur7sdh84azzazdt3ye54k4',
    'show-fields': 'trailText'
  }

  return `http://content.guardianapis.com/search?${qs.stringify(query)}`
}
