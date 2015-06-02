function ToolTip () {}
ToolTip.prototype = {
  successAlert: function(message, location, class_name ){
    location.prepend('<div class="alert-box"><div class="alert-text " '+ class_name +'>'+ message +'</div><div class="arrow-down "'+ class_name '></div></div>')
    $('.alert-box').delay(1500).fadeOut('slow');
  }
}

var toolTip = new ToolTip

