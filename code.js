function SubmitInfo(){

    var name = document.forms["orderForm"]["Name"].value;
    var viewcount = document.forms["orderForm"]["Viewcount"].value;
    var days = document.forms["orderForm"]["Days"].value;
    var weeks = document.forms["orderForm"]["Weeks"].value;
    var months = document.forms["orderForm"]["Months"].value;
    var years = document.forms["orderForm"]["Years"].value;
    var bookmarks = document.forms["orderForm"]["Bookmarks"].value;
    var age = 0;

    if(days >= 1){
      age += Number(days);
    }
    if(weeks >=1){
      age += Number(weeks * 7);
    }
    if(months >= 1){
      age += Number(months * 30);
    }
    if(years >= 1){
      age += Number(years * 365);
    }
  //  alert(age);
    var viewsperday = Math.round(Number(viewcount) / Number(age));
    var bookmarkpercent = (bookmarks / viewcount) * 100;
    bookmarkpercent = Math.round(Number(bookmarkpercent));

    alert(name+"'s results are "+viewsperday+" views per day, with "+bookmarkpercent+"% of bookmarks.");
  }
