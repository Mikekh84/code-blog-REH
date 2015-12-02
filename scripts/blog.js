var blog = {};
blog.filtAut = [];
blog.filtCat =[];
blog.render = function(){
  blog.rawData.sort(function(a, b) {
    a = new Date(a.publishedOn);
    b = new Date(b.publishedOn);
    return a>b ? -1 : a<b ? 1 : 0;
  });
  for (var i = 0; i < this.rawData.length; i++){
    var art = new Article(this.rawData[i]);
    art.toHTML();
  }
};
blog.daysSincePost = function(postDate){
  var today = new Date();
  var oneDay = 24*60*60*1000;
  var postDate = new Date(postDate);
  return Math.round(Math.abs((postDate.getTime()-today.getTime())/(oneDay)));
};
blog.truncateArticles = function() {
  $('.blogBody p:not(:first-child)').hide();
  $('main').on('click', '.readOn', function(event){
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
blog.makeFilterList = function(array, prop) {
  for (var i = 0; i < this.rawData.length; i++){
    var x = this.rawData[i][prop];
    if(array.indexOf(x) === -1){
      array.push(x);
    }
  }
  for (var i = 0; i < array.length; i++) {
    var $opt = $('<option></option>');
    $opt.attr('value', array[i]);
    $opt.attr('id', array[i]);
    $opt.text(array[i]);
    $('#'+prop +'List').append($opt);
    console.log(prop +'List');
  }
};
