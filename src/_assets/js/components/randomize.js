/**
 * ------------------------------------------------------------------------
 * Generate random posts
 * ------------------------------------------------------------------------
 */

export default function generateRandomPosts() {
  fetch('/randomi.json')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const element = $('#random-posts')
      const numberOfPosts = 5

      // console.log('Loaded [randomi.json] for random posts.')

      let contents = ''

      for (let count = 0; count < numberOfPosts; ++count) {
        // Generate an random index
        const index = Math.floor(Math.random() * json.length)
        // Get the post
        const post = json[index]
        // Random post metadata
        const url = post.u
        const title = post.t
        const excerpt = post.e
        const readTime = post.r
        const date = post.d
        // Template
        // prettier-ignore
        const link = '<div class="random-posts-item clearfix">' +
                        '<a href="' + url + '">' +
                          '<h3 class="random-posts-item-title">' + title + '</h3>' +
                          '<p class="random-posts-item-excerpt">' + excerpt + '</p>' +
                        '</a>' +
                        '<div class="random-posts-item-meta">' + readTime + ' &middot; Posted ' + date + '</div>' +
                      '</div>'
        contents = contents + link
        json.splice(index, 1)
      }
      element.html(contents)
    })
    .catch(function (error) {
      console.error(error)
    })
}
