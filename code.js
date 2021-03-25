function SubmitInfo(){

    var name = document.forms["orderForm"]["Name"].value;
    var viewcount = document.forms["orderForm"]["Viewcount"].value;
    var days = document.forms["orderForm"]["Days"].value;
    var months = document.forms["orderForm"]["Months"].value;
    var years = document.forms["orderForm"]["Years"].value;
    var bookmarks = document.forms["orderForm"]["Bookmarks"].value;

    var age = (years * 365) + (months * 30) + days;

    let profile = {
      "Name" : name,
      "Viewcount" : viewcount,
      "Age" : age,
      "Bookmarks" : bookmarks
    }
    if (!profiles){
      let profiles = {profile}
    }else{
      profiles.push(profile);
    }

  }


}
