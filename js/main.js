$(function(){

// when you hover over a listing, hide the description
  $(listingOne).mouseover(hideInformationOne);
  $(listingTwo).mouseover(hideInformationTwo);
  $(listingThree).mouseover(hideInformationThree);
  $(listingFour).mouseover(hideInformationFour);

  function hideInformationOne() {
    $("#paragraphOne").attr("class", "hidden");
  }

  function hideInformationTwo() {
    $("#paragraphTwo").attr("class", "hidden");
  }

  function hideInformationThree() {
    $("#paragraphThree").attr("class", "hidden");
  }

  function hideInformationFour() {
    $("#paragraphFour").attr("class", "hidden");
  }

  $(listingOne).mouseleave(showInformationOne);
  $(listingTwo).mouseleave(showInformationTwo);
  $(listingThree).mouseleave(showInformationThree);
  $(listingFour).mouseleave(showInformationFour);

  function showInformationOne() {
    $(paragraphOne).attr("class", "none");
  }

  function showInformationTwo() {
    $(paragraphTwo).attr("class", "none");
  }

  function showInformationThree() {
    $(paragraphThree).attr("class", "none");
  }

  function showInformationFour() {
    $(paragraphFour).attr("class", "none");
  }

// when you hover over the tabs, make the bottom border light up


});