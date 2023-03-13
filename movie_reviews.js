const request = require("request");

var URL = "https://serpapi.com/search?engine=naver&query=%EC%84%9C%EC%B9%982&api_key=acb12b0df2e6d6f9027cfe3b644fb44cb11994f0c92a4bb862f744b1ec8b0fe1";
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
    var reviews = object_data["knowledge_graph"]["movie"]["reviews"];
    var all_reviews = "";
    for (var i = 0; i < reviews.length; i++){
      all_reviews += "- " + reviews[i]["body"] + "\n";
    }
    var query =  `영화 서치2에 대한 리뷰들을 한 문장으로 요약해줘 : \n\n ${all_reviews}`
    console.log(query); 
  }
})
