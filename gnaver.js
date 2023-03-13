const request = require("request");

var URL = "https://serpapi.com/search?engine=naver&query=%EB%A7%88%EC%9D%B8%EC%A6%88%EB%9E%A9&api_key=f21f326b550a02e9512eb47d920a58bfebd441f41cf2b4c558b620a185ebfa7e"
// var URL = "https://serpapi.com/search?engine=naver&query=%22%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90%22&api_key=f21f326b550a02e9512eb47d920a58bfebd441f41cf2b4c558b620a185ebfa7e"

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
    stock_results = object_data["stock_result"]["main_stock"];
    cur_time = stock_results["info"];
    stock_price = stock_results["stock_price"];
    status = stock_results["status"];
    rate_price_change = stock_results["rate_price_change"];
    previous_day_closing = stock_results["previous_day_closing"];

    stock_info_string = `현 시각: ${cur_time}, 현재 주가: ${stock_price}, 주가 상황: ${status}, \%변화 : ${rate_price_change}, 전일 종가: ${previous_day_closing}`;

    var news_data = object_data["news_results"];
    title_str = ""
    for (var i = 0; i < news_data.length; i++){
      title = news_data[i]["title"]
      title_str += "뉴스" + i.toString() + ":" + title + "\n";
    }

    full_info_string = stock_info_string + "\n\n" + title_str;

    query_str = `마인즈랩의 주가 정보와 가장 최근 뉴스 제목으로 현재 마인즈랩의 상황을 요약해줘.\n\n ${full_info_string}`;

    console.log(query_str);
  }
})
