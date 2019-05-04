
var btn = document.querySelector("#btn");
var res = document.querySelector("#result");
btn.addEventListener("click", function(){
var first = document.querySelector("#first");
var sec = document.querySelector("#sec");
if (Number(first.value)<=0 || Number(sec.value)<=0 || Number(first.value)> Number(sec.value)){
    document.querySelector("#result").innerHTML ="Wpisz prawidłowe liczby !";
    document.querySelector("#result").classList.remove("wgth");
    document.querySelector("#result").classList.add("err");   
}
else {
    document.querySelector("#result").innerHTML ="Prawdopodobieństwo wygrania to: "+ combination(Number(first.value),Number(sec.value));
    document.querySelector("#result").classList.remove("err");
    document.querySelector("#result").classList.add("wgth");
}
})
    function factorial(num){
      var result = 1;
      var count = 1;
      while(count <=num){
          result *=count;
          count++;
      }
      return result;
    }

    function combination(number,all){
        var c = factorial(all)/(factorial(number) * factorial(all-number));
        c = c.toFixed();
        return 1+"/"+c;
    }