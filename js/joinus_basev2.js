$(document).ready(function() {
  var schools = [ "哈尔滨工业大学", "北京航空航天大学","北京邮电大学"];
  var methods = [
    // "技术类",
    // "技术类（上海）",
    // "技术类（深圳)",
    // "产品类",
    // "职能类",
    "NLP算法工程师",
    "语音识别算法工程师",
    "广告算法工程师",
    "数据挖掘工程师",
    "研发工程师",
    "售前工程师",
    "实习生"
  ];
  var methods_soc = [
    "技术类",
    "技术类（上海）",
    "技术类（深圳)",
    "产品类",
    "职能类",
    "实习"
  ];
  var schools_list = "";
  var methods_list = "";
  var methods_list_soc = "";
  var job_falg = false;
  // 跳转
  function goDetail(id) {
    if (!job_falg) {
      window.location.href = "jobs.html?id=" + id + "&isSoc=1";
    } else {
      window.location.href = "jobs.html?id=" + id;
    }
  }
  // tab选择
  $(".join_tabs div").click(function() {
    $(this)
      .addClass("activity")
      .siblings()
      .removeClass("activity");
    if (
      $(".join_tabs div")
        .eq(1)
        .hasClass("activity")
    ) {
      job_falg = true;
      $(".join_school").hide();
      $(".join_soci")
        .removeClass("hide")
        .show();
    } else {
      job_falg = false;
      $(".join_school").show();
      $(".join_soci").hide();
    }
  });
  // 学校
  for (var i = 0; i < schools.length; i++) {
    var t_content =
      `<div class="school_steps_item">
                        <div>${i==0?`2019-09-03`:'待定'}</div>
                        <div class="school_steps_img">
                            <img src="./assets/images/joinus/logo\_morweb\_joinus\_` +
      (i + 1) +
      `.png" alt="joinus_schools">
                        </div>
                        <div>` +
      schools[i] +
      `</div>
                </div>`;
    schools_list += t_content;
  }
  $(".school_steps_content").append(schools_list);
  //职位校招
  for (var i = 0; i < methods.length; i++) {
    var t_content =
      `<div class="jobs_meetings_item" num="` +
      i +
      `">
                        <div class="jobs_meetings_img">
                            <img src="./assets/images/joinus/img\_morweb\_joinus\_` +
      (i + 1) +
      `.png" alt="joinus_schools">
                        </div>
                        <div>` +
      methods[i] +
      `</div>
                </div>`;
    methods_list += t_content;
  }
  //社招
  for (var i = 0; i < 6; i++) {
    var t_content =
      `<div class="jobs_meetings_item" num="` +
      i +
      `">
                        <div class="jobs_meetings_img">
                            <img src="./assets/images/joinus/img\_morweb\_joinus\_` +
      (i + 1) +
      `.png" alt="joinus_schools">
                        </div>
                        <div>` +
      methods_soc[i] +
      `</div>
                </div>`;
    methods_list_soc += t_content;
  }
  //校招
  $(".jobs_meetings_content")
    .eq(0)
    .append(methods_list);
  //社招
  $(".jobs_meetings_content")
    .eq(1)
    .append(methods_list_soc);
  // 职位详情
  $(".jobs_meetings_item").on("click", function() {
    var num = $(this).attr("num");
    if (num) {
      goDetail(num);
    }
  });
});
