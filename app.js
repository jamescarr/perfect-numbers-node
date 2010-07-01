var kiwi= require('kiwi')

kiwi.require('express');
require('express/plugins')
var ArticleProvider = require('./articleprovider-memory').ArticleProvider;

configure(function(){
  use(MethodOverride);
  use(ContentLength);
  use(Logger);
  set('root', __dirname);
})

var articleProvider= new ArticleProvider();

get('/', function(){
  var self = this;
  articleProvider.findAll(function(error, docs){
    self.render('blog_index.html.haml', {
      locals: {
        title: 'Blog',
        articles: docs
      }
    });
  })
})

get('/blog/new', function(){
  this.render('blog_new.html.haml', {locals:{title:'New Post'}});
});

post('/blog/new', function(){
  var self = this;
  articleProvider.save({
    title: this.param('title'),
    body: this.param('body')
  }, function(error, docs) {
    self.redirect('/')
  });
});

get('/*.css', function(css){
  this.render(css + ".css.sass", {layout:false});
});

run();
