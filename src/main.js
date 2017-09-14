/* global window */

const $ = window.$ = window.jQuery = require('jquery')
const getUrl = require('./get-url')

module.exports = (function () {
  $(window).on('load', () => {
    const sectionPage = {
      'uk-news': 1,
      football: 1,
      travel: 1
    }
    const sections = Object.keys(sectionPage)

    sections.forEach((section, i) => addSection({section, page: 1}, 'html'))

    function addSection ({section, page}, action) {
      $.get(getUrl({section, page}), ({response}) => {
        console.log(response)
        $(`#${section}`)[action](window.newsItemsTpl(response))
      })
    }

    function changeTab (e) {
      const section = $(e.target).attr('data-section')

      $('.tab').removeClass('active')
      $(`[data-section="${section}"]`).addClass('active')

      $('.list').hide()
      $(`#${section}`).show()

      $('#more').hide()
    }

    function getMore (e) {
      const section = $('.tab.active').attr('data-section')
      const page = sectionPage[section] + 1

      addSection({section, page}, 'append')
      sectionPage[section] += 1

      $('#more').hide()
    }

    $('.tab').on('click', changeTab)

    $('#more').on('click', getMore).hide()

    $('.list').hide()

    $(`#uk-news`).show()

    $(window).scroll(() => {
      if ($(document).height() <= ($(window).height() + $(window).scrollTop())) $('#more').show()
    })
  })
})()
