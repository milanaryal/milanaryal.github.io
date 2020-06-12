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
      var element = $('#random-posts')
      var contents = ''
      var numberOfPosts = 5

      console.log('Loaded [randomi.json] for random posts.')

      for (var count = 0; count < numberOfPosts; ++count) {
        // Generate an random index
        var index = Math.floor(Math.random() * json.length)
        // Get the post
        var post = json[index]
        // Random post metadata
        var url = post.u
        var title = post.t
        var excerpt = post.e
        var readTime = post.r
        var date = post.d
        // Template
        // prettier-ignore
        var link = '<div class="random-posts-item clearfix">' +
                        '<a href="' + url + '">' +
                          '<h3 class="random-posts-item-title">' + title + '</h3>' +
                          '<p class="random-posts-item-excerpt">' + excerpt + '</p>' +
                        '</a>' +
                        '<div class="random-posts-item-meta">' + readTime + ' &middot; Posted ' + date + '</div>' +
                      '</div>';
        contents = contents + link
        json.splice(index, 1)
      }
      element.html(contents)
    })
    .catch(function (error) {
      console.error(error)
    })
}
