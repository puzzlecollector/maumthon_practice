const request = require("request")

var URL = "https://serpapi.com/search?engine=google&q=%22BERT&api_key=<HIDDEN>";


const options = {
  url: URL,
  type: "get",
};

request.get(options, function(err,data){
  if (err){
    console.log(err);
  }else{
    var search_data = data.body;
    var object_data = JSON.parse(search_data);
    var related_questions = object_data["related_questions"];
    var q_str = ""
    for (var i = 0; i < related_questions.length; i++){
      q_str += related_questions[i]["question"] + " " + related_questions[i]["snippet"] + "\n\n"
    }
    console.log(q_str)
  }
})


//question, snippet

/*
var reviews = ip1.product_results.user_reviews

var buff_list = ""
for (var i=0; i < reviews.length; i++){
        buff_list += reviews[i]["text"] + "\n\n"
}

var result = `이 제품에 리뷰들이 주어졌을 때, 하나의 리뷰로 요약하고 한글로 번역해줘 $(buff_list)`;

return {"text": result};
*/
